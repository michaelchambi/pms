import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RolesService } from '../../../../../service/roles/roles.service';
import { VariableService } from '../../../../../service/public/variable.service';

@Component({
  selector: 'app-module-permissions',
  templateUrl: './module-permissions.component.html',
  styleUrls: ['./module-permissions.component.css']
})
export class ModulePermissionsComponent implements OnInit {

  token:any;
  name:any;
  constructor(
    private role:RolesService,
    private activeRoute: ActivatedRoute,
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.showRole(this.activeRoute.snapshot.paramMap.get('id'));
  }


  showRole(id:any){
    this.role.showRoles(id).subscribe(
      res=>{
        this.name = res.name;
      },

      err=>{
        this.name = err.error.message;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


  
}

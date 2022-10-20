import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service'; 
import { ActivatedRoute,Router } from '@angular/router';
import { RolesService } from '../../../../../service/roles/roles.service';
@Component({
  selector: 'app-update-role-permission-form',
  templateUrl: './update-role-permission-form.component.html',
  styleUrls: ['./update-role-permission-form.component.css']
})
export class UpdateRolePermissionFormComponent implements OnInit {

  token:any;
  name:any;
  id:any;
  constructor(
    private role:RolesService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.showRole(this.activeRoute.snapshot.paramMap.get('id'));
  }


  showRole(id:any){
    this.role.showRoles(id).subscribe(
      res=>{
        this.name = res.name;
        this.id = res.id;
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

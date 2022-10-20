import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RolesService } from '../../../../../service/roles/roles.service';
@Component({
  selector: 'app-update-role-permission',
  templateUrl: './update-role-permission.component.html',
  styleUrls: ['./update-role-permission.component.css']
})
export class UpdateRolePermissionComponent implements OnInit {

  token:any;
  name:any;
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

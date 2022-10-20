import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../../service/roles/roles.service';
import { VariableService } from '../../../../service/public/variable.service';
import { ActivatedRoute,Router } from '@angular/router';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {


  searchText:any;
  p: number = 1;
  rolesList:any;
  success:boolean = false;
  action:boolean = true;
  close:boolean = false;
  actionError:boolean = false;
  message:any;

  data={
    id:''
  }

  sub_moduleId:any;
  constructor(
    private roles:RolesService,
    public variable: VariableService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
  ) { }

  ngOnInit(): void {
    this.getRoles();
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }


  getRoles(){
    this.roles.getRoles().subscribe(
      res=>{
        this.rolesList = res;        
      },
      err=>{ 
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  deactivateRole(id:any){
    this.data.id = id;
    this.roles.deactivateRole(this.data).subscribe(
      res=>{
        this.action = false;
        this.close = true;
        
      },
      err=>{
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
        }
    );
  }

  activateRole(id:any){
    this.data.id = id;
    this.roles.activateRole(this.data).subscribe(
      res=>{
        this.action = false;
        this.close = true;
        
      },
      err=>{        
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
        }
    );
  }

  deleteRole(id:any){
    this.data.id = id;
    this.roles.deleteRole(this.data).subscribe(
      res=>{
        this.action = false;
        this.close = true;
        
      },
      err=>{        
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
        }
    );
  }

  reloadPage() { 
    window.location.reload();
}


}

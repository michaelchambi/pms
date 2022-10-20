import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service';
import { ModulesService } from '../../../../service/system-modules/modules.service';
import { SubModulesService } from '../../../../service/system-sub-modules/sub-modules.service';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-sub-modules',
  templateUrl: './sub-modules.component.html',
  styleUrls: ['./sub-modules.component.css']
})
export class SubModulesComponent implements OnInit {

  searchText:any;
  p: number = 1;
  subModuleList:any;
  success:boolean = false;
  action:boolean = true;
  close:boolean = false;
  actionError:boolean = false;
  message:any;
  moduleId:any;
  subModuleId:any;

  data={
    id:''
  }

  constructor(
    public variable: VariableService,
    private module: ModulesService,
    private submodule: SubModulesService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showSubModule(this.activeRoute.snapshot.paramMap.get('id'));
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id2'));
    this.moduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.subModuleId = this.activeRoute.snapshot.paramMap.get('id2');
  }

  showSubModule(id:any) {
    this.module.showSubModule(id).subscribe(
      res => {
        this.subModuleList = res;
      },

      err => {
        this.variable.errorMessage = err.message;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  deactivateSubModule(id:any){
    this.data.id = id;
    this.submodule.deactivateSubModule(this.data).subscribe(
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

  activateSubModule(id:any){
    this.data.id = id;
    this.submodule.activateSubModule(this.data).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service';
import { SubModulesService } from '../../../../service/system-sub-modules/sub-modules.service';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';


@Component({
  selector: 'app-sub-module-action',
  templateUrl: './sub-module-action.component.html',
  styleUrls: ['./sub-module-action.component.css']
})
export class SubModuleActionComponent implements OnInit {

  searchText:any;
  p: number = 1;
  actionList:any;
  success:boolean = false;
  button:boolean = true;
  close:boolean = false;
  actionError:boolean = false;
  message:any;
  moduleId:any;
  submoduleId:any;

  data={
    id:''
  }

  constructor(
    public variable: VariableService,
    private submodule: SubModulesService,
    private sub_action: SubModulesActionService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id2'));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.moduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.showAction(this.activeRoute.snapshot.paramMap.get('id'));
  }


  showAction(id:any){
    this.submodule.showSubmoduleActions(id).subscribe(
      res=>{
        this.actionList = res;
      },

      err=>{
        this.variable.errorMessage = err.message;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  deactivateAction(id:any){
    this.data.id = id;
    this.sub_action.deactivateSubmoduleAction(this.data).subscribe(
      res=>{
        this.button = false;
        this.close = true;
      },

      err=>{
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.button = false;
          if(err.error.token == 0){
            localStorage.setItem('token',err.error.token);
          }
      }

    );

  }

  activateAction(id:any){
    this.data.id = id;
    this.sub_action.activateSubmoduleAction(this.data).subscribe(
      res=>{
        this.button = false;
        this.close = true;
      },

      err=>{
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.button = false;
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

import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import{ ModulesService } from '../../../../service/system-modules/modules.service';
import { ActivatedRoute,Router } from '@angular/router';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  searchText:any;
  p: number = 1;
  moduleList:any;
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
    public variable: VariableService,
    private module: ModulesService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
  ) { }

  ngOnInit(): void {
    this.modules();
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  modules(){
    this.module.getModules().subscribe(
      res=>{
        this.moduleList = res;
      },

      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }

        if(err.error.token != 0){
          this.variable.errorMessage = err.message;
        }
      }
    );
  }


  deactivateModule(id:any){
    this.data.id = id;
    this.module.deactivateModule(this.data).subscribe(
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

  activateModule(id:any){
    this.data.id = id;
    this.module.activateModule(this.data).subscribe(
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

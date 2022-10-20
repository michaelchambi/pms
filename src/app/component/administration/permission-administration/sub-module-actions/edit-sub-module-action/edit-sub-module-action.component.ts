import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ModulesService } from '../../../../../service/system-modules/modules.service';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';
import { SubModulesActionService } from '../../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-edit-sub-module-action',
  templateUrl: './edit-sub-module-action.component.html',
  styleUrls: ['./edit-sub-module-action.component.css']
})
export class EditSubModuleActionComponent implements OnInit {

  token:any;
  id:any;
  moduleName:any;
  moduleId:any;
  submoduleName:any;
  sub_moduleId:any
  constructor(
    private activeRoute: ActivatedRoute,
    private module: ModulesService,
    private submodule: SubModulesService,
    private action: SubModulesActionService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.showAction(this.activeRoute.snapshot.paramMap.get('id'));
  }


  showAction(id:any) {
    this.action.showSubmoduleAction(id).subscribe(
      res => {
        this.module.showModule(res.moduleId).subscribe(
          result=>{
            this.moduleName = result.name;
          },

          error=>{
            if(error.error.token == 0){
              localStorage.setItem('token',error.error.token);
            }
          } 
        ); // end of Show Module


        this.submodule.showSubModule(res.sub_moduleId).subscribe(
          result=>{
            this.submoduleName = result;
          },

          error=>{
            if(error.error.token == 0){
              localStorage.setItem('token',error.error.token);
            }
          } 
        ); // end of Show SubModule

      },

      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

}

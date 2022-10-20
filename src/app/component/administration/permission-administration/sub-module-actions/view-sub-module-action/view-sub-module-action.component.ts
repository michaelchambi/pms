import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ModulesService } from '../../../../../service/system-modules/modules.service';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';
import { SubModulesActionService } from '../../../../../service/system-sub-modules-action/sub-modules-action.service';


@Component({
  selector: 'app-view-sub-module-action',
  templateUrl: './view-sub-module-action.component.html',
  styleUrls: ['./view-sub-module-action.component.css']
})
export class ViewSubModuleActionComponent implements OnInit {

  token: any;
  moduleName:any;
  moduleId:any;
  submoduleName:any;
  id:any;
  sub_moduleId:any;
  constructor(
    private module: ModulesService,
    private submodule: SubModulesService,
    private actions: SubModulesActionService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');    
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.showSubModule(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showSubModule(id:any){     
        this.submodule.showSubModule(id).subscribe(
          res=>{
            this.submoduleName = res.name;
            
            this.module.showModule(res.moduleId).subscribe(
              result=>{
                this.moduleName = result.name;
                this.moduleId = result.id;
              },
    
              error=>{
                if(error.error.token == 0){
                  localStorage.setItem('token',error.error.token);
                }
              } 
            ); // end of Show Module
          },

          subErr=>{
            if(subErr.error.token == 0){
              localStorage.setItem('token',subErr.error.token);
            }
          }
        );


  }

}

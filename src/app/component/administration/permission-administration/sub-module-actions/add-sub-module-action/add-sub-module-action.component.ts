import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ModulesService } from '../../../../../service/system-modules/modules.service';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';

@Component({
  selector: 'app-add-sub-module-action',
  templateUrl: './add-sub-module-action.component.html',
  styleUrls: ['./add-sub-module-action.component.css']
})
export class AddSubModuleActionComponent implements OnInit {

  token:any;
  id:any;
  moduleName:any;
  moduleId:any;
  submoduleName:any;
  submoduleId:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private module: ModulesService,
    private submodule: SubModulesService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
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

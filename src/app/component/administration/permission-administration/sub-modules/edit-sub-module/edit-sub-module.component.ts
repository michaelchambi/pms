import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';

@Component({
  selector: 'app-edit-sub-module',
  templateUrl: './edit-sub-module.component.html',
  styleUrls: ['./edit-sub-module.component.css']
})
export class EditSubModuleComponent implements OnInit {

  token:any;
  id:any;
  moduleId:any;
  submoduleId:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private submodule: SubModulesService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.showSubModule(this.activeRoute.snapshot.paramMap.get('id'));
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
  }

  showSubModule(id:any) {
    this.submodule.showSubModule(id).subscribe(
      res => {        
        	this.moduleId = res.moduleId;
      },

      err => {
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';
import { SubModulesActionService } from '../../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-add-sub-module-action-form',
  templateUrl: './add-sub-module-action-form.component.html',
  styleUrls: ['./add-sub-module-action-form.component.css']
})
export class AddSubModuleActionFormComponent implements OnInit {

  messageError: any;
  success: any;
  id: any;
  module_id: any
  data = {
    name: '',
    moduleId: '',
    sub_moduleId: '',
  }
  constructor(
    public variable: VariableService,
    private submodules: SubModulesService,
    private action: SubModulesActionService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addAction() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.module_id = this.activeRoute.snapshot.paramMap.get('id2');
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.submodules.showSubModule(this.id).subscribe(
      res => {
        this.data.moduleId = res.moduleId;
        this.data.sub_moduleId = this.id;
        this.action.addSubmoduleAction(this.data).subscribe(
          result => {
            this.variable.appSuccess = true;
            this.variable.successMessage = result.message;
            this.router.navigate(['/sub-module-action/' + this.id + '/' + this.module_id]);
          },

          error => {
            this.variable.appError = true;
            this.variable.bfrcreating = true;
            this.variable.creating = false;
            this.messageError = error.error.message;
            if (error.error.token == 0) {
              localStorage.setItem('token', error.error.token);
            }

          }
        );



      },

      err => {
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );





  }
}

import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubModulesActionService } from '../../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-edit-sub-module-action-form',
  templateUrl: './edit-sub-module-action-form.component.html',
  styleUrls: ['./edit-sub-module-action-form.component.css']
})
export class EditSubModuleActionFormComponent implements OnInit {

  messageError: any;
  success: any;
  id: any;
  module_Id: any;
  sub_moduleId: any;

  data = {
    name: ''
  }
  constructor(
    public variable: VariableService,
    private action: SubModulesActionService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showAction(this.activeRoute.snapshot.paramMap.get('id'));
  }


  showAction(id: any) {
    this.action.showSubmoduleAction(id).subscribe(
      result => {
        this.data.name = result.name;
        this.sub_moduleId = result.sub_moduleId;
      },

      err => {
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }
  editAction() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.module_Id = this.activeRoute.snapshot.paramMap.get('id2');
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.action.editSubmoduleAction(this.id, this.data).subscribe(
      result => {
        this.variable.appSuccess = true;
        this.variable.successMessage = result.message;
        this.router.navigate(['/sub-module-action/' + this.sub_moduleId + '/' + this.module_Id]);
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
  }

}

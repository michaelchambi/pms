import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-sub-module-form',
  templateUrl: './edit-sub-module-form.component.html',
  styleUrls: ['./edit-sub-module-form.component.css']
})
export class EditSubModuleFormComponent implements OnInit {

  messageError: any;
  success: any;
  moduleId: any;
  secondId: any;
  id: any
  data = {
    name: '',
    link: '',
    icon: ''
  }
  constructor(
    public variable: VariableService,
    private submodule: SubModulesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showSubModule(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showSubModule(id: any) {
    this.submodule.showSubModule(id).subscribe(
      res => {
        this.data.name = res.name;
        this.data.link = res.link;
        this.data.icon = res.icon;
        this.moduleId = res.moduleId;
      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  editSubModule() {
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.secondId = this.activeRoute.snapshot.paramMap.get('id2');
    this.submodule.editSubModule(this.id, this.data).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/module-submodule/' + this.moduleId + '/' + this.secondId]);
      },

      err => {
        this.variable.appError = true;
        this.variable.bfrcreating = true;
        this.variable.creating = false;
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );

  }
}

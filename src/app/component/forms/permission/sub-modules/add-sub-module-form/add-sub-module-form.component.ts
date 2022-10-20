import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service';
import { SubModulesService } from '../../../../../service/system-sub-modules/sub-modules.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-module-form',
  templateUrl: './add-sub-module-form.component.html',
  styleUrls: ['./add-sub-module-form.component.css']
})
export class AddSubModuleFormComponent implements OnInit {

  messageError: any;
  success: any;
  id: any;
  moduleId: any;
  data = {
    name: '',
    link: '',
    icon: '',
  }

  constructor(
    public variable: VariableService,
    private submodules: SubModulesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  addSubModule() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.moduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.submodules.addSubModule(this.id, this.data).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/module-submodule/' + this.id + '/' + this.moduleId]);
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

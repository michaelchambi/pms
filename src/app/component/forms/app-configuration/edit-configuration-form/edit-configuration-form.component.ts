import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { AppConfigService } from '../../../../service/app-config/app-config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-configuration-form',
  templateUrl: './edit-configuration-form.component.html',
  styleUrls: ['./edit-configuration-form.component.css']
})
export class EditConfigurationFormComponent implements OnInit {

  logo: any;
  selectedFile: any;
  id: any;
  submoduleId: any;
  data = {
    id: '',
    name: '',
    institution: '',
    website: '',
    logo: ''
  }

  config: any;

  messageError: any;

  constructor(
    public variable: VariableService,
    private app: AppConfigService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showConfig(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showConfig(id: any) {
    this.app.showAppConfig(id).subscribe(
      res => {
        this.data = res;
        this.logo = res.logo;
      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }

      }
    );
  }

  logoUpload(e: any) {
    this.selectedFile = e.target.files[0];

  }

  editConfiguration() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.data.id = this.id;
    console.log('Logo', this.data.logo);

    if (this.selectedFile == undefined) {
      this.selectedFile = null;

      let formData = new FormData();
      formData.append('id', this.data.id);
      formData.append('name', this.data.name);
      formData.append('institution', this.data.institution);
      formData.append('website', this.data.website);

      this.app.editConfig(formData).subscribe(
        res => {
          this.variable.appSuccess = true;
          this.variable.successMessage = res.message;
          this.router.navigate(['/app-config/' + this.submoduleId]);
        },

        err => {
          this.messageError = err.error.message;
          if (err.error.token == 0) {
            localStorage.setItem('token', err.error.token);
          }

        }
      );

    }
    else {
      let formData = new FormData();
      formData.append('id', this.data.id);
      formData.append('name', this.data.name);
      formData.append('institution', this.data.institution);
      formData.append('website', this.data.website);
      formData.append('logo', this.selectedFile);

      this.app.editAppconfig_logo(formData).subscribe(
        res => {
          this.variable.appSuccess = true;
          this.variable.successMessage = res.message;
          this.router.navigate(['/app-config/' + this.submoduleId]);
        },

        err => {
          this.messageError = err.error.message;
          if (err.error.token == 0) {
            localStorage.setItem('token', err.error.token);
          }

        }
      );
    }





    // this.app.editAppconfig


  }
}

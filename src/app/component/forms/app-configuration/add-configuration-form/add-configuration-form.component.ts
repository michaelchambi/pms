import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { AppConfigService } from '../../../../service/app-config/app-config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-configuration-form',
  templateUrl: './add-configuration-form.component.html',
  styleUrls: ['./add-configuration-form.component.css']
})
export class AddConfigurationFormComponent implements OnInit {

  selectedFile: any;
  id: any;
  data = {
    name: '',
    institution: '',
    website: '',
    logo: ''
  }

  messageError: any;


  constructor(
    public variable: VariableService,
    private app: AppConfigService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  logoUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  addConfiguration() {
    let formData = new FormData();
    formData.append('name', this.data.name);
    formData.append('institution', this.data.institution);
    formData.append('website', this.data.website);
    formData.append('logo', this.selectedFile);

    this.app.addAppconfig(formData).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/app-config/' + this.id]);

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

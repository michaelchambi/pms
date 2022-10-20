import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-profile-form',
  templateUrl: './add-profile-form.component.html',
  styleUrls: ['./add-profile-form.component.css']
})
export class AddProfileFormComponent implements OnInit {

  messageError: any;
  success: any;
  data = {
    name: ''
  }

  id: any;


  constructor(
    public variable: VariableService,
    private profile: ProfilesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  addProfile() {
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.profile.addProfile(this.data).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/profile/' + this.id]);


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

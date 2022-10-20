import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { OfficesService } from '../../../../service/offices/offices.service';
import { RolesService } from '../../../../service/roles/roles.service';
import { CourtsService } from '../../../../service/courts/courts.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { VariableService } from 'src/app/service/public/variable.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  data = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    profileId: '',
    courtId: '',
    zoneId: '',
    officeId: '',
    roles: [],
    creator: '',
  }

  tempPassword: any;
  userProfiles: any;
  userOffice: any;
  userRole: any;
  userCourt: any;
  messageError: any;
  id: any;
  sub_moduleId: any;


  constructor(
    private profile: ProfilesService,
    private office: OfficesService,
    private role: RolesService,
    public court: CourtsService,
    private auth: AuthService,
    private router: Router,
    public variable: VariableService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProfile();
    this.getOffices();
    this.getRoles();
    this.court.__Courts();
  }

  getProfile() {
    this.profile.getProfiles().subscribe(
      res => {
        this.userProfiles = res;
        return this.userProfiles;
      },

      err => {
        this.userProfiles = err;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }

        return this.userProfiles;
      }
    );
  }

  getOffices() {
    this.office.getOffices().subscribe(
      res => {
        this.userOffice = res;
        return this.userOffice;
      },
      err => {
        this.userOffice = err;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
        return this.userOffice;
      }
    );
  }

  getRoles() {
    this.role.getRoles().subscribe(
      res => {
        this.userRole = res;
        return this.userRole
      },
      err => {
        this.userRole = err;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
        return this.userRole
      }
    );
  }



  registerUser() {

    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = localStorage.getItem('id');
    this.court.showCourts(this.data.courtId).subscribe(
      res => {
        this.data.zoneId = res.court.zone_id;
        this.data.creator = this.id;
        this.auth.userRegister(this.data).subscribe(
          result => {
            this.variable.bfrcreating = true;
            this.variable.creating = false;

            if (result.code == 1) {
              localStorage.setItem('add-user-success', result.message);
              this.variable.addUserSuccess = true;
              this.variable.addUserError = false;
              this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
              this.router.navigate(['/view-users/' + this.sub_moduleId]);
            }
            this.messageError = result.message;
            this.variable.addUserSuccess = false;
            this.variable.addUserError = true;
            return this.messageError;
          },
          error => {
            this.variable.bfrcreating = true;
            this.variable.creating = false;
            this.variable.addUserSuccess = false;
            this.variable.addUserError = true;
            this.messageError = error.error.message;
            if (error.error.token == 0) {
              localStorage.setItem('token', error.error.token);
            }
            return this.messageError;
          }
        );

      },
      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
        return err;
      }
    );


  }



}

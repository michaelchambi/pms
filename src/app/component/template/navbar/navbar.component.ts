import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../service/public/variable.service';
import { ProfilesService } from '../../../service/profiles/profiles.service';
import { AppConfigService } from '../../../service/app-config/app-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profileName: any;
  sysInfo: any;
  messageError: any;

  constructor(
    public variable: VariableService,
    private profile: ProfilesService,
    public app: AppConfigService
  ) { }

  ngOnInit(): void {
    this.userInformation();
    this.showProfile();
    this.getActiveAppConfig();
  }

  getActiveAppConfig() {
    this.app.getActiveAppConfig().subscribe(
      res => {
        this.sysInfo = res;
      },

      err => {
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  userInformation() {
    this.variable.fullname = localStorage.getItem('fullname');
    this.variable.email = localStorage.getItem('email');
    this.variable.profileId = localStorage.getItem('profile');
    return this.variable.fullname, this.variable.email, this.variable.profileId;
  }

  showProfile() {
    this.variable.profileId = localStorage.getItem('profile');
    this.profile.showProfile(this.variable.profileId).subscribe(
      res => {
        this.profileName = res.name;
        return this.profileName;

      },
      err => {
        this.profileName = err.error.message
        return this.profileName;

      }
    );
  }

  refresh() {
    window.location.reload();
  }


}

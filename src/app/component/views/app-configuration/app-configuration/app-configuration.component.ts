import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';
import { AppConfigService } from '../../../../service/app-config/app-config.service';

@Component({
  selector: 'app-app-configuration',
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.css']
})
export class AppConfigurationComponent implements OnInit {

  searchText: any;
  p: number = 1;
  action: boolean = true;
  close: boolean = false;
  message: any;
  actionError: boolean = false;

  sub_moduleId: any;
  appList: any;

  data = {
    id: ''
  }

  constructor(
    public variable: VariableService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
    private app: AppConfigService
  ) { }

  ngOnInit(): void {
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.appConfiguration();
  }

  appConfiguration() {
    this.app.appconfig().subscribe(
      res => {
        this.appList = res
      },
      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  deactivateApp(id: any) {
    this.data.id = id;
    this.app.deactivateAppconfig(this.data).subscribe(
      res => {
        this.action = false;
        this.close = true;
      },

      err => {
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }

    );
  }

  activateApp(id: any) {
    this.data.id = id;
    this.app.activateAppconfig(this.data).subscribe(
      res => {
        this.action = false;
        this.close = true;
      },

      err => {
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }

      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../service/app-config/app-config.service';
import { VariableService } from '../../../service/public/variable.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  messageError:any;
  sysInfo:any;

  constructor(
    public app: AppConfigService,
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
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

}

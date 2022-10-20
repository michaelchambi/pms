import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../service/public/variable.service';
import { AppConfigService } from '../../../service/app-config/app-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  sysInfo: any;
  messageError: any;

  constructor(
    public variable: VariableService,
    public app: AppConfigService
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

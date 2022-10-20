import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../service/public/variable.service';
import { AppConfigService } from '../../../service/app-config/app-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sysInfo: any;
  messageError: any;

  constructor(
    public variable: VariableService,
    public app: AppConfigService
  ) { }

  ngOnInit(): void {
  }


  errorMessage() {
    return this.variable.loginErrorAlert, this.variable.loginErrorMesssage;
  }

}

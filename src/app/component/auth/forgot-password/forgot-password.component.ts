import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../service/public/variable.service';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private auth: AuthService,
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
    return this.variable.loginErrorMesssage;
  }

}

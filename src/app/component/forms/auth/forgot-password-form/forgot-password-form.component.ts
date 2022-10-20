import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { AuthService } from '../../../../service/auth/auth.service';


@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit {

  bfrforgot: boolean = true;
  forgretting: boolean = false;
  data={
    email:''
  }
  constructor(
    private auth: AuthService,
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
  }

  passwordForgot(){
    this.bfrforgot = false;
    this.forgretting = true;
    console.log(this.data);
    
    this.auth.forgotPassword(this.data).subscribe(
      res=>{
        this.variable.loginErrorAlert = false;
        this.forgretting = false;
        this.variable.title = false;
        this.variable.forgot = true;
      },
      err=>{
        if (err.status == 500) {
          this.variable.loginErrorAlert = true;
          this.variable.loginErrorMesssage = 'No account associated with this email';
          this.bfrforgot = true;
          this.forgretting = false;
        }
        
      }
    );
  }


}

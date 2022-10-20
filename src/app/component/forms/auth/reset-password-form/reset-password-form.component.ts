import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { isEqual } from 'lodash';
import { VariableService } from '../../../../service/public/variable.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  bfrReseting: boolean = true;
  reseting: boolean = false;
  message:any;
  data={
    code:'',
    password:''
  }
  password: any;
  id:any;
  confirmPassword: any;

  constructor(
    private auth: AuthService,
    public variable: VariableService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changePassword(){
    isEqual(this.password, this.confirmPassword);
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.data.password = this.password;
    this.data.code = this.id;
    
    if(isEqual(this.password, this.confirmPassword)){
      this.auth.changePassword(this.data).subscribe(
        res=>{
          this.variable.resetPassword = true;
          this.message = res;
          this.variable.loginErrorMesssage = this.message.message;
          this.router.navigate(['/login']);
          
        },
        err=>{
          console.log(err);
          
          this.variable.loginErrorAlert = true;
          this.variable.loginErrorMesssage = 'Link Expired, Forgot password';
          if(err.error.code == 101) {
            this.router.navigate(['/forgot-password']);
          }
          
        }
      );
    }

    else{
      this.variable.loginErrorAlert = true
      this.variable.loginErrorMesssage = 'Password does not match';
    }

  }

  
}
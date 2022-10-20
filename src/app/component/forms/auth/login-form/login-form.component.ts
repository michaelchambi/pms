import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginData = {
    email:'',
    password:''
  }

  bfrsigin: boolean = true;
  signing:boolean = false;


  constructor(
    private auth: AuthService,
    private router: Router,
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
  }


  userLogin(){
    this.bfrsigin = false;
    this.signing = true;
    this.auth.userLogin(this.loginData).subscribe(
      res =>{
        localStorage.setItem('id',res.id);
        localStorage.setItem('token',res.accessToken);
        localStorage.setItem('fullname',res.fullname);
        localStorage.setItem('profile',res.profileId);
        localStorage.setItem('email',res.email);
        localStorage.setItem('courtId',res.courtId);
        this.variable.profileId = localStorage.getItem('profile');

        if(this.variable.profileId == 1){
          if (res.status == 90) {
            
          }
          this.router.navigate(['/admin-dashboard']);
        }

        else{
          this.router.navigate(['/user-dashboard']);
      }

      },

      err =>{
        this.bfrsigin = true;
        this.signing = false;
        this.variable.loginErrorAlert = true;
        this.variable.loginErrorMesssage = err.error.message;

      }
    );

  }


}

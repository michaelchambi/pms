import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-reset-session',
  templateUrl: './reset-session.component.html',
  styleUrls: ['./reset-session.component.css']
})
export class ResetSessionComponent implements OnInit {

  bfrestore: boolean = true;
  restore: boolean = false;
  labelEmail:any;
  message:any;
  alert: boolean = false;

  data={
    email:'',
    password:''
  }
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.labelEmail = localStorage.getItem('email');
  }

  SessionRestore(){
    this.bfrestore = false;
    this.restore = true;
    this.data.email = this.labelEmail;
    
    this.auth.userLogin(this.data).subscribe(
      res=>{
        localStorage.setItem('token',res.accessToken);
        let currenturl = this.router.url
        
          window.location.reload();
      },
      err=>{
        this.bfrestore = true;
        this.restore = false;
        this.alert = true;
        this.message = 'Fail to restore session. Kindly try again.'
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service';

@Component({
  selector: 'app-activate-account-form',
  templateUrl: './activate-account-form.component.html',
  styleUrls: ['./activate-account-form.component.css']
})
export class ActivateAccountFormComponent implements OnInit {

  bfractivate: boolean = true;
  activating: boolean = false;

  data={
    code:''
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private variable: VariableService
  ) { }

  ngOnInit(): void {
  }

  accountActivate(){
    this.bfractivate = false;
    this.activating = true;
    this.auth.activateAccount(this.data).subscribe(
      res => {
        this.variable.activate = true;
        this.variable.title = false
        
      },

      err => {
        this.bfractivate = true;
        this.activating = false;
        this.variable.loginErrorAlert = true;
        this.variable.loginErrorMesssage = 'Fail to activate contact ICT Team'
        
      }
    );
    
  }

}

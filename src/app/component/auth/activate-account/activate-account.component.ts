import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../service/public/variable.service';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(
    private auth: AuthService,
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
    return this.variable.loginErrorMesssage;
  }

}

import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../service/public/variable.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    public variable: VariableService,
  ) { }

  ngOnInit(): void {
  }

}

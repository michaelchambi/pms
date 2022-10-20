import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  token: any;
  constructor(
    public auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}

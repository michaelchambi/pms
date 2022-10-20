import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  token: any;
  constructor(
    public auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}

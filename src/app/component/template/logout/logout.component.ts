import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}

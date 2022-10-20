import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';
import { GeneralService } from '../../../../../service/general/general.service';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  token:any;
  fullname:any;
  constructor(
    private user:UsersService,
    private activeRoute: ActivatedRoute,
    private general: GeneralService
  ) { }

  ngOnInit(): void {2
    this.user.__UserDetails(this.activeRoute.snapshot.paramMap.get('id'));
    this.fullname = this.user;
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }

  

}

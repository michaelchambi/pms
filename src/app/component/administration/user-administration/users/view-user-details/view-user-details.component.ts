import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService } from '../../../../../service/users/users.service';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {

  userName:any;
  token:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private user:UsersService
  ) { }

  ngOnInit(): void {
    this.userInfo(this.activeRoute.snapshot.paramMap.get('id'));
    this.token = localStorage.getItem('token');
  }

  userInfo(id:any): void {
    this.user.showUser(id).subscribe(
      res=>{
        this.userName = res.fullname;
      },
      err=>{
        this.userName = err.name;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

}

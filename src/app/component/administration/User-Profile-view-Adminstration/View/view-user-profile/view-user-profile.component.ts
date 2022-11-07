import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {

  
  token: any;
  sub_moduleId: any;
  constructor(
    private general: GeneralService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

}

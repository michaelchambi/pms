import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../service/general/general.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  token:any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }

}

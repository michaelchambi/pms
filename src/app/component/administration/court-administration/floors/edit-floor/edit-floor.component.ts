import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../service/general/general.service';

@Component({
  selector: 'app-edit-floor',
  templateUrl: './edit-floor.component.html',
  styleUrls: ['./edit-floor.component.css']
})
export class EditFloorComponent implements OnInit {

  token:any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }

}

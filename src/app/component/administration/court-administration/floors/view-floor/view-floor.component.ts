import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../service/general/general.service';
@Component({
  selector: 'app-view-floor',
  templateUrl: './view-floor.component.html',
  styleUrls: ['./view-floor.component.css']
})
export class ViewFloorComponent implements OnInit {

  token:any;
  active:any;

  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }




}

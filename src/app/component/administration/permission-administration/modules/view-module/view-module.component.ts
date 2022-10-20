import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../service/general/general.service';

@Component({
  selector: 'app-view-module',
  templateUrl: './view-module.component.html',
  styleUrls: ['./view-module.component.css']
})
export class ViewModuleComponent implements OnInit {

  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }


}

import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../service/general/general.service';

@Component({
  selector: 'app-view-app-configuration',
  templateUrl: './view-app-configuration.component.html',
  styleUrls: ['./view-app-configuration.component.css']
})
export class ViewAppConfigurationComponent implements OnInit {

  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }

}

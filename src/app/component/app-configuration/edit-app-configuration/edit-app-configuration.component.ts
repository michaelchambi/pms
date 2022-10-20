import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../service/general/general.service';

@Component({
  selector: 'app-edit-app-configuration',
  templateUrl: './edit-app-configuration.component.html',
  styleUrls: ['./edit-app-configuration.component.css']
})
export class EditAppConfigurationComponent implements OnInit {

  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }

}

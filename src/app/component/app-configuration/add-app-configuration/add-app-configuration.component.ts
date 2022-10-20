import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../service/general/general.service';

@Component({
  selector: 'app-add-app-configuration',
  templateUrl: './add-app-configuration.component.html',
  styleUrls: ['./add-app-configuration.component.css']
})
export class AddAppConfigurationComponent implements OnInit {

  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }

}

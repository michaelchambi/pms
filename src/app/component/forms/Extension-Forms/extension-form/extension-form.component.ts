import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
@Component({
  selector: 'app-extension-form',
  templateUrl: './extension-form.component.html',
  styleUrls: ['./extension-form.component.css']
})
export class ExtensionFormComponent implements OnInit {
  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }


}

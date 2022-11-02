import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-time-extension-detailed-view',
  templateUrl: './time-extension-detailed-view.component.html',
  styleUrls: ['./time-extension-detailed-view.component.css']
})
export class TimeExtensionDetailedViewComponent implements OnInit {

  
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

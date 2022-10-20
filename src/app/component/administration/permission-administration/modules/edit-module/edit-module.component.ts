import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../service/general/general.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  token:any;
  id:any;
  constructor(
    private general: GeneralService,
    private activeRoute: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id2');
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }
}

import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../service/general/general.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  token:any;
  id:any;
  constructor(
    private general: GeneralService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GeneralService } from '../../../../../service/general/general.service';

@Component({
  selector: 'app-add-sub-module',
  templateUrl: './add-sub-module.component.html',
  styleUrls: ['./add-sub-module.component.css']
})
export class AddSubModuleComponent implements OnInit {

  token:any;
  id:any;
  submodule:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.submodule = this.activeRoute.snapshot.paramMap.get('id2');
    this.general.verifyToken();
  }

}

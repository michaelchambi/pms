import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{ ModulesService } from '../../../../../service/system-modules/modules.service';
@Component({
  selector: 'app-view-sub-module',
  templateUrl: './view-sub-module.component.html',
  styleUrls: ['./view-sub-module.component.css']
})
export class ViewSubModuleComponent implements OnInit {

  token: any;
  name:any;
  id:any;
  constructor(
    private module: ModulesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id2');
    this.token = localStorage.getItem('token');
    this.showModule(this.activeRoute.snapshot.paramMap.get('id'));
  }


  showModule(id:any):void {
    this.module.showModule(id).subscribe(
      res => {
        this.name = res.name;
      },

      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


}

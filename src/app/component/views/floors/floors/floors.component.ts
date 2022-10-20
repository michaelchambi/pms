import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { FloorsService } from '../../../../service/floors/floors.service';
import { ActivatedRoute,Router } from '@angular/router';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  searchText:any;
  p: number = 1;
  floorList:any;
  success:boolean = false;
  action:boolean = true;
  close:boolean = false;
  actionError:boolean = false;
  message:any;

  data={
    id:''
  }

  sub_moduleId:any;

  constructor(
    private floor: FloorsService,
    public variable: VariableService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
  ) { }

  ngOnInit(): void {
    this.getfloor();
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
  }


  getfloor(){
    this.floor.getFloors().subscribe(
      res=>{
        this.floorList = res;
      },
      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  deactivateFloor(id:any){
    this.data.id = id;
    this.floor.deactivateFloor(this.data).subscribe(
      res=>{
        this.action = false;
        this.close = true;
      },

      err=>{
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


  activateFloor(id:any){
    this.data.id = id;
    this.floor.activateFloor(this.data).subscribe(
      res=>{
        this.action = false;
        this.close = true;
      },

      err=>{
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  deleteFloor(id:any){
    this.data.id = id;
    this.floor.deleteFloor(this.data).subscribe(
      res=>{
        this.action = false;
        this.close = true;
      },

      err=>{
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  reloadPage() { 
    window.location.reload();
}
}

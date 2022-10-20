import { Component, OnInit } from '@angular/core';
import { OfficesService } from '../../../../service/offices/offices.service';
import { VariableService } from '../../../../service/public/variable.service';
import { ActivatedRoute,Router } from '@angular/router';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  searchText:any;
  p: number = 1;
  roomList:any;
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
    private room: OfficesService,
    public variable: VariableService,
    private activeRoute: ActivatedRoute,
    public subaction: SubModulesActionService,
  ) { }

  ngOnInit(): void {
    this.rooms();
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  rooms(){
    this.room.getOffices().subscribe(
      res=>{
        this.roomList = res;
      },
      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


  deactivateRoom(id:any){
    this.data.id = id;
    this.room.deactivateOffice(this.data).subscribe(
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

  activateRoom(id:any){
    this.data.id = id;
    this.room.activateOffice(this.data).subscribe(
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

  deleteRoom(id:any){
    console.log(id);
    this.data.id = id;
    this.room.deleteOffice(this.data).subscribe(
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

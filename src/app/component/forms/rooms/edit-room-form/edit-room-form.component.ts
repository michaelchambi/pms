import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service'; 
import { OfficesService } from '../../../../service/offices/offices.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-room-form',
  templateUrl: './edit-room-form.component.html',
  styleUrls: ['./edit-room-form.component.css']
})
export class EditRoomFormComponent implements OnInit {

  messageError:any;
  success:any;
  id:any;
  data = {
    name: ''
  }

  sub_moduleId:any
  constructor(
    public variable: VariableService,
    private office:OfficesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showRoom(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showRoom(id:any){
    this.office.showOffice(id).subscribe(
      res=>{
        this.data.name = res.name;
      },

      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  editRoom(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.office.editOffice(this.id,this.data).subscribe(
      
      res=>{
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
        this.router.navigate(['/rooms/'+this.sub_moduleId]);
      },

      err=>{
        this.variable.appError = true;
        this.variable.bfrcreating = true;
        this.variable.creating = false;
        this.messageError = err.error.message;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FloorsService } from '../../../../service/floors/floors.service';
import { VariableService } from '../../../../service/public/variable.service';

@Component({
  selector: 'app-edit-floor-form',
  templateUrl: './edit-floor-form.component.html',
  styleUrls: ['./edit-floor-form.component.css']
})
export class EditFloorFormComponent implements OnInit {

  messageError:any;
  success:any;
  id:any;
  data = {
    name: ''
  }
  sub_moduleId:any;
  constructor(
    public variable: VariableService,
    private floor:FloorsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showFloor(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showFloor(id:any){
    this.floor.showFloor(id).subscribe(
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

  editFloor(){

    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.floor.editFloor(this.id,this.data).subscribe(
      
      res=>{
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
        this.router.navigate(['/floors/'+this.sub_moduleId]);
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

import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service'; 
import { FloorsService } from '../../../../service/floors/floors.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-floor-form',
  templateUrl: './add-floor-form.component.html',
  styleUrls: ['./add-floor-form.component.css']
})
export class AddFloorFormComponent implements OnInit {

  messageError:any;
  success:any;
  data = {
    name: ''
  }
  id:any;

  constructor(
    public variable: VariableService,
    private floor: FloorsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  addFloor(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.floor.addFloor(this.data).subscribe(
      res=>{
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/department/'+this.id]);
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

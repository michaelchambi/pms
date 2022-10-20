import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service'; 
import { OfficesService } from '../../../../service/offices/offices.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-room-form',
  templateUrl: './add-room-form.component.html',
  styleUrls: ['./add-room-form.component.css']
})
export class AddRoomFormComponent implements OnInit {

  messageError:any;
  success:any;
  data = {
    name: ''
  }

  id:any;

  constructor(
    public variable: VariableService,
    private office:OfficesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  addRoom(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.office.addOffice(this.data).subscribe(
      res=>{
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/rooms/'+this.id]);
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

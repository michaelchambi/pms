import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service'; 
import { RolesService } from '../../../../service/roles/roles.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-role-form',
  templateUrl: './add-role-form.component.html',
  styleUrls: ['./add-role-form.component.css']
})
export class AddRoleFormComponent implements OnInit {

  messageError:any;
  success:any;
  data = {
    name: ''
  }

  id:any;

  constructor(
    public variable: VariableService,
    private role:RolesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  addRole() {
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.role.addRole(this.data).subscribe(
      res=>{
        console.log(res);
        
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/roles/'+this.id]);
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

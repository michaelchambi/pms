import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service'; 
import { RolesService } from '../../../../service//roles/roles.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-role-form',
  templateUrl: './edit-role-form.component.html',
  styleUrls: ['./edit-role-form.component.css']
})
export class EditRoleFormComponent implements OnInit {

  id:any;
    data={
    name: ''
  }

  sub_moduleId:any;

  messageError:any;
  constructor(
    public variable: VariableService,
    private role:RolesService,
    private router:Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showRole(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showRole(id:any){
    this.role.showRoles(id).subscribe(
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

  editRole(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.role.editRole(this.id,this.data).subscribe(
      res => {
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
        this.router.navigate(['/roles/'+this.sub_moduleId]);
        
      },

      err => {
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

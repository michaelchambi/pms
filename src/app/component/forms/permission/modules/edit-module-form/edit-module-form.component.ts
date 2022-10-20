import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service'; 
import { ModulesService } from '../../../../../service/system-modules/modules.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-module-form',
  templateUrl: './edit-module-form.component.html',
  styleUrls: ['./edit-module-form.component.css']
})
export class EditModuleFormComponent implements OnInit {

  messageError:any;
  success:any;
  id:any;
  data = {
    name: '',
    icon:''
  }


  constructor(
    public variable: VariableService,
    private module: ModulesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showModule(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showModule(id:any){
    this.module.showModule(id).subscribe(
      res => {
        this.data.name = res.name;
        this.data.icon = res.icon;
      },

      err => {
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  editModule(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.module.editModule(this.id,this.data).subscribe(
      result => {
        this.variable.appSuccess = true; 
        this.variable.successMessage= result.message;
        this.router.navigate(['/modules/'+this.id]);
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

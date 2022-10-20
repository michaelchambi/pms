import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../../service/public/variable.service'; 
import { ModulesService } from '../../../../../service/system-modules/modules.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-module-form',
  templateUrl: './add-module-form.component.html',
  styleUrls: ['./add-module-form.component.css']
})
export class AddModuleFormComponent implements OnInit {

  messageError:any;
  success:any;
  data = {
    name: '',
    icon:''
  }
  sub_moduleId:any;

  constructor(
    public variable: VariableService,
    private module: ModulesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  addModule(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.module.addModule(this.data).subscribe(
      res=>{
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/modules/'+this.sub_moduleId]);
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

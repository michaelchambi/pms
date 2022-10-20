import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service'; 
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {
  id:any;
    data={
    name: ''
  }
  sub_moduleId:any;
  messageError:any;
  constructor(
    public variable: VariableService,
    private profile:ProfilesService,
    private router:Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showProfile(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showProfile(id:any){
    this.profile.showProfile(id).subscribe(
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

  editProfile(){
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.profile.editProfile(this.id,this.data).subscribe(
      res => {
        this.variable.appSuccess = true; 
        this.variable.successMessage= res.message;
        this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
        this.router.navigate(['/profile/'+this.sub_moduleId]);
        
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

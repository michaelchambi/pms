import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { VariableService } from '../../../../service/public/variable.service';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  searchText:any;
  p: number = 1;
  profileList:any;
  success:boolean = false;
  action:boolean = true;
  close:boolean = false;
  actionError:boolean = false;
  message:any;
  sub_moduleId:any;

  data={
    id:''
  }

  constructor(
    private profile: ProfilesService,
    public variable: VariableService,
    public subaction: SubModulesActionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.profiles();
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  profiles(){
    this.profile.getProfiles().subscribe(
      res=>{
        this.profileList = res;
      },
      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


  deactivateProfile(id:any){
    this.data.id = id;
    this.profile.deactivateProfile(this.data).subscribe(
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

  activateProfile(id:any){
    this.data.id = id;
    this.profile.activateProfile(this.data).subscribe(
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

  deleteProfile(id:any){
    this.data.id = id;
    this.profile.deleteProfile(this.data).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CourtsService } from '../../../../service/courts/courts.service';
import { VariableService } from '../../../../service/public/variable.service';
import { RolesService } from '../../../../service/roles/roles.service';
import { OfficesService } from '../../../../service/offices/offices.service';
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { UsersService } from '../../../../service/users/users.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {
  rolesuser:any;
  offices:any;
  profiles:any;
  courts:any;
  user_profile:any;
  user_roles:any;
  sub_moduleId:any;
  data={
    firstname:'',
    lastname:'',
    fullname:'',
    email:'',
    phone:'',
    courtId:'',
    zoneId:'',
    profileId:'',
    officeId:'',
    roles:[]

  }

  constructor(
    public variable: VariableService,
    private court: CourtsService,
    private role:RolesService,
    private office:OfficesService,
    private profile:ProfilesService,
    public user:UsersService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userCourts();
    this.userOffice();
    this.userRoles();
    this.userProfile();
    this.userProfileShow(this.activeRoute.snapshot.paramMap.get('id'));
    this.user.userDetails(this.activeRoute.snapshot.paramMap.get('id'));    
  }

  userRoles(){
    this.role.getRoles().subscribe(
      res=>{
        this.user_roles = res;         
      },
  
      err=>{
        this.user_roles = err;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  userOffice(){
    this.office.getOffices().subscribe(
      res=>{
        this.offices = res;
      },
      err=>{
        this.offices = err;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  userProfile(){
    this.profile.getProfiles().subscribe(
      res=>{
        this.profiles = res;
      },
      err=>{
        this.profiles = err;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  userCourts(){
    this.court.getCourts().subscribe(
      res=>{
        this.courts = res.courts;
      },
      err=>{
        this.courts = err;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


  userProfileShow(id:any){    
    this.user.showUserProfile(id).subscribe(
      res=>{
        this.user_profile = res;
        this.user.userRoles(id).subscribe(
          result=>{
            this.rolesuser = result;
          },
          error=>{            
            this.rolesuser = error;
            if(error.error.token == 0){
              localStorage.setItem('token',error.error.token);
            }
          }
        );
      },
      err=>{
        this.user_profile = err;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }

  editUser(){
    this.court.showCourts(this.user_profile.courtId).subscribe(
      res=>{

        this.data.firstname = this.user.user.firstname;
        this.data.lastname = this.user.user.lastname;
        this.data.fullname = this.user.user.firstname+' '+this.user.user.lastname;
        this.data.email = this.user.user.email;
        this.data.phone = this.user.user.phone;
        this.data.courtId =  this.user_profile.courtId;
        this.data.zoneId = res.court.zone_id;
        this.data.profileId = this.user_profile.profileId;
        this.data.officeId = this.user_profile.officeId;
        this.data.roles = this.rolesuser;
        console.log(this.data);

        this.user.editUser(this.user.user.id,this.data).subscribe(
          result=>{
            this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
            this.router.navigate(['/view-user-details/'+this.activeRoute.snapshot.paramMap.get('id')+'/'+this.sub_moduleId]);
            
          },
          error=>{
            console.log('error', error);
            if(error.error.token == 0){
              localStorage.setItem('token',error.error.token);
            }
          }
        );
        

      },
      err=>{
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );

    
    
  }


}

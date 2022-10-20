import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService } from '../../../../service/users/users.service';
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { CourtsService } from '../../../../service/courts/courts.service';
import { LocationService } from '../../../../service/location/location.service';
import * as _ from "lodash" ;
import { OfficesService } from '../../../../service/offices/offices.service';
import { RolesService } from '../../../../service/roles/roles.service';
import { VariableService } from '../../../../service/public/variable.service';
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  userDetails:any
  fullname:any;
  status:any;
  error:any;
  password:boolean = false;
  profilename:any;
  userCourt:any;
  userRegion:any;
  userOffice:any;
  user_roles:any;
  rolesUser:any;
  data={
    id:''
  }

  sub_moduleId:any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    public user:UsersService,
    private profile:ProfilesService,
    private court:CourtsService,
    private location: LocationService,
    private office:OfficesService,
    private role:RolesService,
    public varibale: VariableService,
    public action: SubModulesActionService
  ) { }

  ngOnInit(): void {
    this.userInfo(this.activeRoute.snapshot.paramMap.get('id'));
    this.user.__UserDetails(this.activeRoute.snapshot.paramMap.get('id'));
    this.showRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.profile.__Profile();
    this.action.userRoles(this.activeRoute.snapshot.paramMap.get('id2'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
  }

  userInfo(id:any): void {
    this.user.showUserProfile(id).subscribe(
      res=>{
        this.userDetails = res;    
        
        this.office.showOffice(this.userDetails.roomId).subscribe(
          officeName=>{
            this.userOffice = officeName.name;
          },
          officeError=>{
            this.userOffice = officeError;
            if(officeError.error.token == 0){
              localStorage.setItem('token',officeError.error.token);
            }
          }
        );
    
        this.user.showUser(id).subscribe(
          result=>{
            this.status = result.status;
            this.fullname = result.fullname;

            this.profile.showProfile(result.profileId).subscribe(
              profile=>{
                this.profilename = profile.name;
                             
              },
              errorState=>{
                this.profilename = errorState;
                if(errorState.error.token == 0){
                  localStorage.setItem('token',errorState.error.token);
                }
 
                
              }
            );

            this.court.showCourts(this.userDetails.courtId).subscribe(
              courtName => {
                this.userCourt = courtName;

                this.location.showRegion(this.userCourt.court.district.region_id).subscribe(
                  region=>{
                    this.userRegion = region.region;
                    
                  },
                  errorRegion=>{
                    this.userRegion = errorRegion;
                    if(errorRegion.error.token == 0){
                      localStorage.setItem('token',errorRegion.error.token);
                    }
                  }
                );
                
              },
              error=>{
                this.userCourt =error;
                if(error.error.token == 0){
                  localStorage.setItem('token',error.error.token);
                }
              }
            );
            
          },
          error=>{
            this.fullname = error;
            if(error.error.token == 0){
              localStorage.setItem('token',error.error.token);
            }
          }
        );
          
        
      },
      err=>{
        this.userDetails = err;
        if(err.error.token == 0){
          localStorage.setItem('token',err.error.token);
        }
      }
    );
  }


showRoles(id:any){
  this.user.userRoles(id).subscribe(
    res=>{
      this.user_roles = res;
            
      this.role.getRoles().subscribe(
        result=>{
          this.rolesUser = result;
          
          this.user_roles.forEach((roleIn:any) => {
            let roleAssign = _.map(this.rolesUser, function(roles:any){
              if(roleIn.roleId == roles.id){
                return roles;
                
              }
            });

            roleAssign = _.without(roleAssign,undefined);
            roleIn.roleId = roleAssign;


          });
        },

        error=>{
          this.rolesUser = error;
          if(error.error.token == 0){
            localStorage.setItem('token',error.error.token);
          }
        }
      );

    },
    err=>{
      this.user_roles = err;
      if(err.error.token == 0){
        localStorage.setItem('token',err.error.token);
      }
    }
  );
}


deactivateUser(id:any) { 
  this.data.id = id;
  this.user.deactiveUser(this.data).subscribe(
    res=>{
      this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
      this.router.navigate(['./view-user-details/'+ this.data.id+'/'+this.sub_moduleId]);
    },
    err=>{
      if(err.error.token == 0){
        localStorage.setItem('token',err.error.token);
      }
      this.error = 'Error! Kindly try again';
    }
  );
}


activateUser(id:any) { 
  this.data.id = id;
  this.user.activeUser(this.data).subscribe(
    res=>{
      this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
      this.router.navigate(['./view-user-details/'+ this.data.id+'/'+this.sub_moduleId]);
    },
    err=>{
      if(err.error.token == 0){
        localStorage.setItem('token',err.error.token);
      }
      this.error = 'Error! Kindly try again'
    }
  );
}


resetPassword(id:any){
  this.data.id = id;
  this.user.resetPassword(this.data).subscribe(
    res=>{      
      this.password = true;
    },
    err=>{      
      this.password = false;
      if(err.error.token == 0){
        localStorage.setItem('token',err.error.token);
      }
      this.error = 'Error! Kindly try again'
      
    }
  );
}


deleteUser(id:any){
  this.data.id = id;
  this.user.deleteUser(this.data).subscribe(
    res=>{
      this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
     this.router.navigate(['/view-users/'+this.sub_moduleId]);
     this.varibale.deleteUser = true;
    },
    err=>{
      if(err.error.token == 0){
        localStorage.setItem('token',err.error.token);
      }
    }
  );
}



reloadPage() { 
      this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id2');
      this.router.navigate(['./view-user-details/'+ this.data.id+'/'+this.sub_moduleId]).then(() => {
        window.location.reload();
      });
}





}

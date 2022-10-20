import { Component, OnInit } from '@angular/core';
import { VariableService } from '../../../../service/public/variable.service';
import { UsersService } from '../../../../service/users/users.service';
import { ProfilesService } from '../../../../service/profiles/profiles.service';
import { CourtsService } from '../../../../service/courts/courts.service';
import { ActivatedRoute,Router } from '@angular/router';
import * as _ from "lodash" ;
import { SubModulesActionService } from '../../../../service/system-sub-modules-action/sub-modules-action.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  errorState:boolean = false;
  userCourts:any;
  searchText:any;
  success:boolean = false;
  messageSuccess:any;
  usersList:any;
  userProfile:any;
  p: number = 1;
  sub_moduleId:any;

  constructor(
    public variable: VariableService,
    private users:UsersService,
    private profile: ProfilesService,
    private courts: CourtsService,
    private route: Router,
    public action: SubModulesActionService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSuccessMessage();
    this.getusers();
    this.profile.__Profile();
    this.users.__UserProfile();
    this.courts.__Courts();
    this.action.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
    
  }





  getusers(){
    this.users.getUsers().subscribe(
      res=>{
        this.usersList = res;
        this.courts.getCourts().subscribe(
          result=>{
            this.errorState = false;
            this.userCourts = result.courts;  

            this.usersList.forEach((user:any) => {
              let profiles = _.map(this.profile.profileDetails, function(userProfile:any){
                if(user.profileId == userProfile.id){
                  return userProfile;
                }
              });
              profiles = _.without(profiles,undefined);
              user.profiles = profiles;          
            });
    
            this.usersList.forEach((user:any) => {
              let courts = _.map(this.users.userProfiles, function (profile:any) {
                if(user.id == profile.userId){
                  return profile;
                }
              });
              courts = _.without(courts,undefined);
              user.court = courts;
    
            });
    
            this.usersList.forEach((userCourt:any) => {
              userCourt.court.forEach((user_court:any) => {   
                let name = _.map(this.userCourts, function(court:any){
                  if(user_court.courtId == court.id){
                    return court;
                    
                  }
                });

                name = _.without(name,undefined);
                userCourt.court = name;
                
              });
    
            });
    
            // console.log(this.usersList, this.route.url);
            
            return this.usersList;

          },
          error=>{
            this.errorState = true;
            this.userCourts = 'Fail';
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


  getSuccessMessage(){
    this.messageSuccess = localStorage.getItem('add-user-success');
    return this.messageSuccess;
  }

}

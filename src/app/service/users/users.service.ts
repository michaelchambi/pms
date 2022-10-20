import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url =this.variable.API_URL+'users';

  userDetails:any
  userProfiles:any;
  user_profile:any;
  user:any;
  userId:any;

  data:{roles:number[]}={
    roles:[]
  }
  
  constructor(
    private http:HttpClient,
    private general: GeneralService,
    private router: Router,
    public variable: VariableService,
  ) { }
  getUsers(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }

  showUser(id:any){
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editUser(id:any,data:any){
    return this.http.post<any>(`${this.url}/edit/${id}`, data , { headers: this.general.userAuthorization() });
  }
  deactiveUser(id:any){
    return this.http.post<any>(`${this.url}/deactivate`,id , { headers: this.general.userAuthorization() });
  }

  activeUser(id:any){
    return this.http.post<any>(`${this.url}/activate`,id , { headers: this.general.userAuthorization() });
  }

  deleteUser(id:any){
    return this.http.post<any>(`${this.url}/delete`,id , { headers: this.general.userAuthorization() });
  }

  resetPassword(id:any){
    return this.http.post<any>(`${this.url}/resetPassword`,id , { headers: this.general.userAuthorization() });
  }

  showUserProfile(id:any){
    return this.http.get<any>(`${this.url}/profile/show/${id}` , { headers: this.general.userAuthorization() });
  }

  userProfile(){
    return this.http.get<any>(`${this.url}/profiles` , { headers: this.general.userAuthorization() });
  }

  userRoles(id:any){
    return this.http.get<any>(`${this.url}/roles/show/${id}` , { headers: this.general.userAuthorization() });
  }


  __UserProfile(){
    this.userProfile().subscribe(
      res=>{
        this.userProfiles = res;
        
      },
      err=>{
        this.userProfiles = err;
        
      }
    );
  }


  __UserDetails(id:any){
    this.showUser(id).subscribe(
      res=>{
        this.user = res;
        
      },
      err=>{
        this.user = err;
      }
    );
  }


  __ProfileDetails(id:any){
    this.showUserProfile(id).subscribe(
      res=>{
        this.user_profile = res;
      },
      err=>{
        this.user_profile = err;
      }
    );
  }





}

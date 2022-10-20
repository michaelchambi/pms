import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private url = this.variable.API_URL+'profile';

  profile:any;
  profileDetails:any;

  constructor(
    private http:HttpClient,
    private router:Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addProfile(data:any) {
    return this.http.post<any>(`${this.url}/addProfile` , data, { headers: this.general.userAuthorization() });
  }

  getProfiles() {
    return this.http.get<any>(`${this.url}` , { headers: this.general.userAuthorization() });
  }

  showProfile(id: any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editProfile(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editProfile/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateProfile(id:any) {
    return this.http.post<any>(`${this.url}/deactivateProfile`,id ,  { headers: this.general.userAuthorization() });
  }

  activateProfile(id:any) {
    return this.http.post<any>(`${this.url}/activateProfile`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteProfile(id:any) {
    return this.http.post<any>(`${this.url}/deleteProfile`,id , { headers: this.general.userAuthorization() });
  }

  __Profile(){
    this.getProfiles().subscribe(
      res=>{
        this.profileDetails = res;
        
      },
      err=>{
        this.profileDetails = err;
        
      }
    );
  }


}

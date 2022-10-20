import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private url = this.variable.API_URL+'role';
  userRoles:any
  constructor(
    private http: HttpClient,
    private router: Router,
    private general:GeneralService,
    public variable: VariableService,
  ) { }

  addRole(data:any) {
    return this.http.post<any>(`${this.url}/addRoles` , data, { headers: this.general.userAuthorization() });
  }

  getRoles(){
    return this.http.get<any>(`${this.url}` , { headers: this.general.userAuthorization() });
  }

  showRoles(id:any){
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editRole(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editRoles/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateRole(id:any) {
    return this.http.post<any>(`${this.url}/deactivateRole`,id ,  { headers: this.general.userAuthorization() });
  }

  activateRole(id:any) {
    return this.http.post<any>(`${this.url}/activateRole`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteRole(id:any) {
    return this.http.post<any>(`${this.url}/deleteRole`,id , { headers: this.general.userAuthorization() });
  }

__userRoles(){
  this.getRoles().subscribe(
    res=>{
      this.userRoles = res; 
      console.log(this.userRoles);
      
    },

    err=>{
      this.userRoles = err;
    }
  );
}

}

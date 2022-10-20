import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VariableService } from '../public/variable.service';
import { GeneralService } from '../general/general.service';

@Injectable({
  providedIn: 'root'
})
export class SubModulesService {

  private url = this.variable.API_URL+'submodule';
  token:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addSubModule(id:any,data:any){
    return this.http.post<any>(`${this.url}/addSubModule/${id}`, data, { headers: this.general.userAuthorization() });
  }

  getSubModules(){
    return this.http.get<any>(`${this.url}/submodule`, { headers: this.general.userAuthorization() });
  }

  showSubModule(id:any){
    return this.http.get<any>(`${this.url}/submodule/show/${id}`, { headers: this.general.userAuthorization() });
  }

  editSubModule(id:any, data:any){
    return this.http.post<any>(`${this.url}/editSubModule/${id}`, data, { headers: this.general.userAuthorization() });
  }

  deactivateSubModule(id:any) {
    return this.http.post<any>(`${this.url}/deactivateSubModule`,id ,  { headers: this.general.userAuthorization() });
  }

  activateSubModule(id:any) {
    return this.http.post<any>(`${this.url}/activateSubModule`,id ,  { headers: this.general.userAuthorization() });
  }

  showSubmoduleActions(id:any){
    return this.http.get<any>(`${this.url}/submodule-action/${id}` , { headers: this.general.userAuthorization() })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VariableService } from '../public/variable.service';
import { GeneralService } from '../general/general.service';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {


  private url = this.variable.API_URL+'module';
  token:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addModule(data:any){
    return this.http.post<any>(`${this.url}/addModule`, data, { headers: this.general.userAuthorization() });
  }

  getModules(){
    return this.http.get<any>(`${this.url}/module`, { headers: this.general.userAuthorization() });
  }

  showModule(id:any){
    return this.http.get<any>(`${this.url}/module/show/${id}`, { headers: this.general.userAuthorization() });
  }

  editModule(id:any, data:any){
    return this.http.post<any>(`${this.url}/editModule/${id}`, data, { headers: this.general.userAuthorization() });
  }

  deactivateModule(id:any) {
    return this.http.post<any>(`${this.url}/deactivateModule`,id ,  { headers: this.general.userAuthorization() });
  }

  activateModule(id:any) {
    return this.http.post<any>(`${this.url}/activateModule`,id ,  { headers: this.general.userAuthorization() });
  }

  showSubModule(id:any) {
    return this.http.get<any>(`${this.url}/module-submodule/${id}`, {headers: this.general.userAuthorization()});
  }


}

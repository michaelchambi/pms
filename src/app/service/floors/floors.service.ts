import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class FloorsService {

  private url = this.variable.API_URL+'department';

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addFloor(data:any) {
    return this.http.post<any>(`${this.url}/addFloor` , data, { headers: this.general.userAuthorization() });
  }


  getFloors(){
    return this.http.get<any>(`${this.url}/floor`, { headers: this.general.userAuthorization() });
  }


  showFloor(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editFloor(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editFloor/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateFloor(id:any) {
    return this.http.post<any>(`${this.url}/deactivateFloor`,id ,  { headers: this.general.userAuthorization() });
  }

  activateFloor(id:any) {
    return this.http.post<any>(`${this.url}/activateFloor`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteFloor(id:any) {
    return this.http.post<any>(`${this.url}/deleteFloor`,id , { headers: this.general.userAuthorization() });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  private url = this.variable.API_URL+'room';

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addOffice(data:any) {
    return this.http.post<any>(`${this.url}/addRoom` , data, { headers: this.general.userAuthorization() });
  }

  getOffices() {
    return this.http.get<any>(`${this.url}` , { headers: this.general.userAuthorization() });
  }

  showOffice(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editOffice(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editRoom/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateOffice(id:any) {
    return this.http.post<any>(`${this.url}/deactivateRoom`,id ,  { headers: this.general.userAuthorization() });
  }

  activateOffice(id:any) {
    return this.http.post<any>(`${this.url}/activateRoom`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteOffice(id:any) {
    return this.http.post<any>(`${this.url}/deleteRoom`,id , { headers: this.general.userAuthorization() });
  }



}

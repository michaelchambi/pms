import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private url = this.variable.API_URL + 'permission';

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService
  ) {}

  showPermissions() {
    return this.http.get<any>(`${this.url}/permissions`, {
      headers: this.general.userAuthorization(),
    });
  }
  getRolePermissions(id: any) {
    return this.http.get<any>(`${this.url}/role-permission/${id}`, {
      headers: this.general.userAuthorization(),
    });
  }

  updatePermission(data: any) {
    return this.http.post<any>(`${this.url}/updatePermission`, data, {
      headers: this.general.userAuthorization(),
    });
  }

  modulePermissions(data: any) {
    return this.http.post<any>(`${this.url}/show-module-permission`, data, {
      headers: this.general.userAuthorization(),
    });
  }

  subModulePermissions(data: any) {
    return this.http.post<any>(`${this.url}/show-submodule-permission`, data, {
      headers: this.general.userAuthorization(),
    });
  }

  actionPermissions(data: any) {
    return this.http.post<any>(`${this.url}/show-action-permission`, data, {
      headers: this.general.userAuthorization(),
    });
  }




  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private url = this.variable.API_URL + 'app';
  constructor(
    private http: HttpClient,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addAppconfig(data: any) {
    return this.http.post<any>(`${this.url}/addAppconfig`, data, { headers: this.general.userAuthorization() });
  }

  appconfig() {
    return this.http.get<any>(`${this.url}/appconfig`, { headers: this.general.userAuthorization() });
  }

  showAppConfig(id: any) {
    return this.http.get<any>(`${this.url}/appconfig/show/${id}`, { headers: this.general.userAuthorization() });
  }

  editConfig(data: any) {
    return this.http.post<any>(`${this.url}/editAppconfig`, data, { headers: this.general.userAuthorization() });
  }

  editAppconfig_logo(data: any) {
    return this.http.post<any>(`${this.url}/editAppconfig_logo`, data, { headers: this.general.userAuthorization() });
  }

  activateAppconfig(data: any) {
    return this.http.post<any>(`${this.url}/activateAppconfig`, data, { headers: this.general.userAuthorization() });
  }

  deactivateAppconfig(data: any) {
    return this.http.post<any>(`${this.url}/deactivateAppconfig`, data, { headers: this.general.userAuthorization() })
  }

  getActiveAppConfig() {
    return this.http.get<any>(`${this.url}/appconfig/active`);
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url = this.variable.API_URL + 'item';

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addItem(data: any) {
    return this.http.post<any>(`${this.url}/addItem`, data, { headers: this.general.userAuthorization() });
  }

  getItem(id: any) {
    return this.http.post<any>(`${this.url}`, id, { headers: this.general.userAuthorization() });
  }

  showItem(id: any) {
    return this.http.post<any>(`${this.url}/show`, id, { headers: this.general.userAuthorization() });
  }

  activateItem(data: any) {
    return this.http.post<any>(`${this.url}/activate`, data, { headers: this.general.userAuthorization() });
  }

  deactivateItem(data: any) {
    return this.http.post<any>(`${this.url}/deactivate`, data, { headers: this.general.userAuthorization() });
  }

  editItems(data: any) {
    return this.http.post<any>(`${this.url}/editItem`, data, { headers: this.general.userAuthorization() });
  }

  editSwahili(data: any) {
    return this.http.post<any>(`${this.url}/editSwahili`, data, { headers: this.general.userAuthorization() });
  }

  editChinese(data: any) {
    return this.http.post<any>(`${this.url}/editChinese`, data, { headers: this.general.userAuthorization() });
  }

  editImage(data: any) {
    return this.http.post<any>(`${this.url}/editImage`, data, { headers: this.general.userAuthorization() });
  }


}

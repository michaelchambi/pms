import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = this.variable.API_URL + 'project_category';

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }

  addCategory(data: any) {
    return this.http.post<any>(`${this.url}/addCategory`, data, { headers: this.general.userAuthorization() });
  }

  getCategories() {
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }

  showCategories(data: any) {
    return this.http.post<any>(`${this.url}/show`, data, { headers: this.general.userAuthorization() });
  }

  editCategory(data: any) {
    return this.http.post<any>(`${this.url}/editCategory`, data, { headers: this.general.userAuthorization() });
  }

  editCategoryImage(data: any) {
    return this.http.post<any>(`${this.url}/editCategoryIcon`, data, { headers: this.general.userAuthorization() });
  }


  deactivateCategory(data: any) {
    return this.http.post<any>(`${this.url}/deactivate`, data, { headers: this.general.userAuthorization() });
  }

  activateCategory(data: any) {
    return this.http.post<any>(`${this.url}/activate`, data, { headers: this.general.userAuthorization() });
  }
}

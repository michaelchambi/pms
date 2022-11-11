import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from './general/general.service';
import { VariableService } from './public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = this.variable.API_URL + 'task';

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
  ) { }
  //http://localhost:8088/library-connect/api/act/addAct
  addTask(data: any) {
    return this.http.post<any>(`${this.url}/addtask`, data, { headers: this.general.userAuthorization() });
  }
  gettask() {
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  deactivateTask(data: any) {
    return this.http.post<any>(`${this.url}/deactivate`, data, { headers: this.general.userAuthorization() });
  }

  activateTask(data: any) {
    return this.http.post<any>(`${this.url}/activate`, data, { headers: this.general.userAuthorization() });
  }
  showTask(data: any) {
    return this.http.post<any>(`${this.url}/show`, data, { headers: this.general.userAuthorization() });
  }

  editTask(data: any) {
    return this.http.post<any>(`${this.url}/editTask`, data, { headers: this.general.userAuthorization() });
  }

  editTaskFile(data: any) {
    return this.http.post<any>(`${this.url}/editTaskFile`, data, { headers: this.general.userAuthorization() });
  }
}

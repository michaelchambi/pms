import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  token: any;
  checkedToken: any;
  private url = this.variable.API_URL + 'users';

  constructor(
    private variable: VariableService,
    private http: HttpClient,
  ) { }


  userAuthorization() {
    this.token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders()
      .set('x-access-token', this.token);
    return httpHeaders;
  }


  checkToken() {
    return this.http.get<any>(`${this.url}/checkToken`, { headers: this.userAuthorization() });
  }


  verifyToken() {
    this.checkToken().subscribe(
      result => {
        this.checkedToken = result;
      },

      error => {
        this.checkedToken = error;
      }
    );
  }

}

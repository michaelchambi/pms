import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = this.variable.API_URL+'auth';
  token:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    public variable: VariableService,
  ) { }

  userRegister(data:any){
    return this.http.post<any>(`${this.url}/signup`,data);
  }

  userLogin(data: any) {
    return this.http.post<any>(`${this.url}/signin`, data);
  }

  forgotPassword(data:any){
    return this.http.post<any>(`${this.url}/resetPassword`,data);
  }

  changePassword(data: any) {
    return this.http.post<any>(`${this.url}/changePassword`, data);
  }

  activateAccount(data:any) {
    return this.http.post<any>(`${this.url}/activateAccount`, data);
  }




  userLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    localStorage.removeItem('profile');
    this.router.navigate(['/login']);
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      return true;    
    }
    else{
    return false;
    }
  }




}

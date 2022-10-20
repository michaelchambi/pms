import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): any {
    if (this.auth.loggedIn()) {
      return true;
    }
    else {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }

}
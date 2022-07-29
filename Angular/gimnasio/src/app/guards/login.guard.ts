import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }
  canActivate() {
    if (localStorage.getItem('token_gym')) return true;
    else {
      this.router.navigate(['./login']);
      return false;
    }
  }

}

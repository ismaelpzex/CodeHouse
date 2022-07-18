import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(): boolean {
    let token: string | null = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }
    else return true;
  }

}

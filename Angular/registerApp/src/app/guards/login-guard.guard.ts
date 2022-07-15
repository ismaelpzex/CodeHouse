import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  canActivate(): boolean {
    console.log('paso por el guard');
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/loggin'])
      return false;
    } else return true
  }

}

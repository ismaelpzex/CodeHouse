import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {

  }

  isLogged(): boolean {
    return this.usersService.isLogged();
  }

  logOut(): void {
    localStorage.removeItem('token_gym');
    this.router.navigate(['/login']);
  }
}

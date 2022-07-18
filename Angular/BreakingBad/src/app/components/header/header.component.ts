import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getSearch() {
    //redirigir a través de queryparams a la ruta dashboard/characters
    let url = (this.search !== "") ? `dashboard?name=${this.search}` : '/dashboard';
    this.router.navigateByUrl(url);
  }

}

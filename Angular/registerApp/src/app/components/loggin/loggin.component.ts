import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  async getDataForm(form: any) {
    let response = await this.usersService.loggin(form.value)
    console.log(response);
    if (response.token) {
      // this.route.navigate(['/present', response.token]); 
      localStorage.setItem('token', response.token);
      this.route.navigate(['/present'])
    }

  }

}

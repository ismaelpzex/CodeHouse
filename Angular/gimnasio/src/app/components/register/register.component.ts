import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  errors: any[];
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.errors = [];
    this.register = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.register.value);
    try {
      const response = await this.usersService.register(this.register.value);
      if (response.insertId) this.router.navigate(['/login']);
      else {
        this.errors = Object.values(response);
        console.log(response)
      };
    } catch (error) {
      console.error(error);
    }

  }

}

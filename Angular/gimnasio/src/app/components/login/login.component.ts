import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  hasError: boolean;
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) {
    this.hasError = false;
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.hasError = false;
    const response = await this.usersService.login(this.login.value);
    if (response.error) this.hasError = true;
    else {
      this.hasError = false;
      localStorage.setItem('token_gym', response.token);
      await Swal.fire({
        title: 'Loggin correcto',
        text: 'Has accedido correctamente',
        icon: 'success',
        confirmButtonText: 'VENGA ENTONSE'
      });
      this.router.navigate(['/clients']);
    }
  }
}

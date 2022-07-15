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

  formModel: FormGroup;
  constructor(
    private usersSerive: UsersService,
    private route: Router
  ) {
    this.formModel = new FormGroup({
      name: new FormControl('', []),
      surname: new FormControl('', []),
      mail: new FormControl('', []),
      age: new FormControl('', []),
      username: new FormControl('', []),
      password: new FormControl('', []),
      address: new FormControl('', []),
    })
  }

  ngOnInit(): void {
  }

  async getDataForm() {
    let response = await this.usersSerive.register(this.formModel.value)
    console.log(response.error);
    if (response.success) this.route.navigate(['/loggin']);

  }

}

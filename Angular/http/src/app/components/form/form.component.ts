import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formContact: FormGroup;
  constructor(
    private userService: UsersService,
    private router: Router
  ) {
    this.formContact = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      avatar: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/),
      ]),
    }, [])
  }

  ngOnInit(): void {
  }

  async getDataForm(): Promise<any> {
    try {
      let response = await this.userService.create(this.formContact.value);
      console.log(response);
      if (response.id) this.router.navigate(['/agenda']);
      else alert('ERROR')
    } catch (error) {
      console.log(error);
    }
  }

  checkField(controlName: string): string {
    if (this.formContact.get(controlName)?.touched) return (!this.formContact.get(controlName)?.valid && this.formContact.get(controlName)?.touched) ? 'is-invalid' : 'is-valid';
    else return '';

  }

  checkError(controlName: string, error: string) {
    return (this.formContact.get(controlName)?.hasError(error) && this.formContact.get(controlName)?.touched) ? true : false;
  }

}

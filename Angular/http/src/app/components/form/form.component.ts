import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formContact: FormGroup;
  type: string = "Insertar";
  constructor(
    private userService: UsersService,
    private router: Router,
    private activedRoute: ActivatedRoute,
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
    this.activedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.userId);
      if (id) {
        this.type = 'Actualizar';
        const response: any = await this.userService.getById(id);
        const user: User = response.data;

        this.formContact = new FormGroup({
          first_name: new FormControl(user?.first_name, [
            Validators.required,
            Validators.minLength(3),
          ]),
          last_name: new FormControl(user?.last_name, [
            Validators.required,
            Validators.minLength(3)
          ]),
          email: new FormControl(user?.email, [
            Validators.required,
            Validators.pattern(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
          ]),
          avatar: new FormControl(user?.avatar, [
            Validators.required,
            Validators.pattern(/^(http|https):\/\/[^ "]+$/),
          ]),
          id: new FormControl(user?.id, []),
        }, []);
      }
    })
  }

  async getDataForm(): Promise<any> {
    try {
      if (this.formContact.value.id) {
        let response = await this.userService.update(this.formContact.value);
        console.log(response);
      } else {
        let response = await this.userService.create(this.formContact.value);
        if (response.id) this.router.navigate(['/agenda']);
        else alert('ERROR')
      }
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

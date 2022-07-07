import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      edad: new FormControl('', [
        this.ageValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      puesto: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
      ]),
      repitPass: new FormControl('', [
        Validators.required
      ]),
      rgpd: new FormControl('', [
        Validators.requiredTrue
      ]),
    }, [this.passwordValidator]);
  }

  ngOnInit(): void {
  }

  getDataForm() {
    if (this.formModel.valid) {

      console.log(this.formModel.value)
    } else console.log('HIJO DE P... no toques el inspector');
  }

  checkControl(controlName: string, error: string): boolean {
    if (this.formModel.get(controlName)?.hasError(error) && this.formModel.get(controlName)?.touched) {
      return true;
    } else return false;
  }

  ageValidator(controlName: AbstractControl): any {
    //el controlName es el objeto que valida, sirve para obtener el value del campo
    const edad: number = parseInt(controlName.value);
    if (isNaN(edad)) return { 'agevalidator': 'la edad no es un numero' };
    else if (edad < 18 || edad > 65) return { 'agevalidator': 'La edad no está entre 18 o 65 años' };
    return null
  }

  passwordValidator(form: AbstractControl): any {
    const password: string = form.get('password')?.value;
    const repitPass: string = form.get('repitPass')?.value;
    if (password !== repitPass) return { 'passwordvalidator': true };
    else return null
  }

  dniValidator(controlName: AbstractControl): any {
    //no solo validamos que esté bien escrito si no que la letra sea válida
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const dni: string = controlName.value;
    const expReg = /^\d{8}[A-Za-z]{1}/;
    if (expReg.test(dni)) {
      const numero: number = parseInt(dni.substring(0, dni.length - 1));
      const letra: string = dni[dni.length - 1];
      const posicion: number = numero % 23;

      return (letra !== letrasDni[posicion]) ? { 'dnivalidator': 'La letra no corresponde al dni' } : null;
    }
    else return { 'dnivalidator': 'formato de dni incorrecto' };
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Ismael';
  iva: number = 0.21;
  racional: number = 0.23425;
  arrNumeros: any[] = [
    { numero: 1, tipo: 'impar' },
    { numero: 2, tipo: 'par' },
    { numero: 3, tipo: 'impar' },
    { numero: 4, tipo: 'par' },
    { numero: 5, tipo: 'impar' },
  ]

  precio: number = 12345;
  fecha: Date = new Date();
  nacimiento: string = '2022-01-02'
  pi: number = Math.PI;

  arrAnimales: string[] = ['leon', 'gato', 'perro', 'mofeta'];
  texto: string = 'Lorem fistrum a gramenawer por la gloria de mi madre a gramenawer no puedor va usté muy cargadoo jarl ese hombree qué dise usteer pupita me cago en tus muelas. Por la gloria de mi madre ese pedazo de apetecan caballo blanco caballo negroorl benemeritaar diodeno jarl papaar papaar. Quietooor de la pradera se calle ustée a wan quietooor está la cosa muy malar quietooor benemeritaar al ataquerl torpedo. No puedor no te digo trigo por no llamarte Rodrigor sexuarl ahorarr de la pradera papaar papaar a gramenawer amatomaa caballo blanco caballo negroorl está la cosa muy malar. Ese pedazo de sexuarl va usté muy cargadoo te voy a borrar el cerito hasta luego Lucas de la pradera va usté muy cargadoo tiene musho peligro caballo blanco caballo negroorl torpedo. Apetecan caballo blanco caballo negroorl te va a hasé pupitaa caballo blanco caballo negroorl no puedor quietooor. Ese que llega te voy a borrar el cerito llevame al sircoo te voy a borrar el cerito diodenoo benemeritaar me cago en tus muelas diodenoo. Fistro ese que llega al ataquerl la caidita la caidita diodeno va usté muy cargadoo no te digo trigo por no llamarte Rodrigor se calle ustée.'
}

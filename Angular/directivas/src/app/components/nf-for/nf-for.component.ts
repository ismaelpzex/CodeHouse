import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nf-for',
  templateUrl: './nf-for.component.html',
  styleUrls: ['./nf-for.component.css']
})
export class NfForComponent implements OnInit {

  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  todosEpisodios: any[] = [];
  arrFiltered: any[] = [];

  constructor() {
    this.todosEpisodios = new Array(

      { serie: 'Game of Thrones', title: 'Winter Is Coming', director: 'Tim Van Patten', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'The Kingsroad', director: 'Tim Van Patten', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'Lord Snow', director: 'Brian Kirk', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'The Wolf and the Lion', director: 'Brian Kirk', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'A Golden Crown', director: 'Daniel Minahan', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'You Win or You Die', director: 'Daniel Minahan', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

      { serie: 'Game of Thrones', title: 'The Pointy End', director: 'Daniel Minahan', descripcion: 'Lorem fistrum no puedor a gramenawer a peich. A peich torpedo tiene musho peligro al ataquerl te va a hasé pupitaa va usté muy cargadoo por la gloria de mi madre. Me cago en tus muelas', image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40' },

    )
    this.arrFiltered = this.todosEpisodios;
  }

  ngOnInit(): void {
  }

  filterDirector($event: any): void {
    this.arrFiltered = this.todosEpisodios.filter((value) => value.director.includes($event.target.value))
  }

}

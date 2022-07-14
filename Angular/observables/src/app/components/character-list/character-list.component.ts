import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  next: string = "";
  prev: string = "";
  @Input() name: string = "";
  error: string = "";

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getAll().subscribe((data: any) => {
      this.characters = data.results;
      this.next = data.info.next;
      this.prev = data.info.prev;
    })
  }

  ngOnChanges(): void {
    //cuando carguemos la peticion a la api esta puede devolver un aerror, con observables tenemos que crear un objeto observable con una funcion next y error
    const myObservable = {
      next: (data: any) => {
        this.characters = data.results;
        this.next = data.info.next;
        this.prev = data.info.prev;
      },
      error: (error: any) => {
        this.characters = [];
        this.error = "No hay resultados pare esta búsqueda";
      }
    }
    this.charactersService.getByName(this.name).subscribe(myObservable);

    //   this.charactersService.getByName(this.name).subscribe((data: any) => {
    //   this.characters = data.results;
    //   this.next = data.info.next;
    //   this.prev = data.info.prev;
    // })
  }

  goToPage(url: string): void {
    this.charactersService.getAll(url).subscribe((data: any) => {
      this.characters = data.results;
      this.next = data.info.next;
      this.prev = data.info.prev;
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  character: Character | any;
  constructor(
    private activateRoute: ActivatedRoute,
    private charactersService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idcharacter);
      console.log(id)
      let response = await this.charactersService.getById(id);
      this.character = response[0];
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] | any;
  constructor(
    private charactersService: CharactersService,
    private activadteRoute: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.activadteRoute.queryParams.subscribe(async (queryParams: any) => {
      console.log(queryParams);
      if (queryParams.name !== undefined) {

        this.characters = await this.charactersService.getByName(queryParams.name)
      }
      else {
        this.characters = await this.charactersService.getAll();
      }
    })
  }

}

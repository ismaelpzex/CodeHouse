import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() characterSearch: EventEmitter<string>
  constructor() {
    this.characterSearch = new EventEmitter();
  }

  ngOnInit(): void {
  }

  getSearch($event: any) {
    this.characterSearch.emit($event.target.value);
  }

}

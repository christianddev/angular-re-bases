import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [{
    name: "Krillin",
    power: 500
  },
  {
    name: "Goku",
    power: 10000
  }, {
    name: "Vegeta",
    power: 9000
  }, {
    name: "Trunks",
    power: 100
  }]
}

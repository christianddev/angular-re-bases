import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid"

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }


  characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 500
  },
  {
    id: uuid(),
    name: "Goku",
    power: 10000
  }, {
    // id: uuid(),
    name: "Vegeta",
    power: 9000
  }, {
    id: uuid(),
    name: "Trunks",
    power: 100
  }]

  addCharacter(character: Character): void {
    this.characters.push({ ...character, id: uuid() })
  }

  deleteCharacterByIndex(index: number): void {
    this.characters.splice(index, 1)
  }


  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character) => character?.id !== id)
  }
}

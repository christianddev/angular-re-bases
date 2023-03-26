import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  characters: Character[] = []


  deleteCharacter(id?: string) {
    if (!id) {
      return
    }
    this.onDeleteCharacter.emit(id)
  }
}

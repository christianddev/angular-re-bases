import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroesNames: string[] = ['Ab', 'Bc', 'Cd']
  deletedHero: string = ""

  deleteHero(itemName: string): void {
    this.deletedHero = itemName
    this.heroesNames = this.heroesNames.filter((a) => a !== itemName)
  }
}

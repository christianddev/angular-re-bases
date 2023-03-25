import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  nick: string = "Lola"
  name: string = "Lolita"
  age: number = 60



  get capitalizedName() {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name}, ${this.age}`
  }

  changeName(): void {
    this.name = "Lo"
    this.age = 60
  }

  changeAge(): void {
    this.age = 30
  }
}

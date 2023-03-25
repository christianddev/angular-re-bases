import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>Counter: {{counter}}</p>
  <button (click)="decreaseCounter()">-</button>
  <button (click)="resetCounter()">0</button>
  <button (click)="increaseCounter()">+</button>`
})

export class CounterComponent implements OnInit {
  counter = 0
  constructor() { }

  ngOnInit() { }


  increaseCounter = (value: number = 1): void => {
    console.log(value)
    this.counter++;
  }

  decreaseCounter = (value: number = 1): void => {
    console.log(value)
    this.counter--;
  }

  resetCounter = (value: number = 0): void => {
    console.log(value)
    this.counter = 0;
  }
}
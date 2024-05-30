import { Component } from '@angular/core';
import { MyFirstService } from './my-first.service';

@Component({
  selector: 'app-root',
  template: `
  <input [(ngModel)]="_myFirst.name" type="text">
  <button (click)="_myFirst.save()">Kaydet</button>
  <hr>
  <ul>
    <li *ngFor="let n of _myFirst.names">{{n}}</li>
  </ul>
  `

})
export class AppComponent {
  constructor(
    public _myFirst: MyFirstService
  ) {}
}

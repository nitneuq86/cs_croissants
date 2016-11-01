import { Component } from '@angular/core';
import { DateService } from './date.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>Planning</h1>
    <ul>
      <li *ngFor="let jour of vendredis">{{jour}}</li>
    </ul>
  `
})
export class AppComponent {
  constructor(private dateService: DateService) { }

  vendredis = this.dateService.getVendredis(2016, 1);
}
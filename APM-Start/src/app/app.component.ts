import { Component } from '@angular/core';
import {ProductListComponent} from './products/product-list.component'

@Component({
  selector: 'pm-root',
  template : `<div>
              <h1>{{title}}</h1>
              <h2>welcome</h2>
              <pm-products></pm-products>
              </div>`,
  // templateUrl: './product-list.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}

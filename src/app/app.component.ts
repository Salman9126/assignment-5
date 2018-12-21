import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1 class="blue">
    Welcome to {{ title }}!
  </h1>
  <input type="text" name="test">
  </div>
  <app-new-comp></app-new-comp>`,
  styles: [`.blue{
    color:blue;
  }`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}

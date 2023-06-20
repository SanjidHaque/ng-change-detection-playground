import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'sanjid';
  lastName = 'haque';

   getName() {
    console.log('getName() called');
    return this.name;
  }

  getLastName() {
    console.log('getLastName() called');
    return this.lastName;
  }

  mouseOverDiv() {
    console.log('mouseOverDiv() called');
  }

  clickButton() {
    console.log('clickButton() called');
  }
}

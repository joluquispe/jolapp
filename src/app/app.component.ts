import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'jolu';
  age = 27;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name : 'Joselu',
    age  : 27,
    avatar : 'https://source.unsplash.com/random'
  }
}

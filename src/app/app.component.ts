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
    age  : 71,
    avatar : 'https://source.unsplash.com/random'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScrooll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  chageName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

}

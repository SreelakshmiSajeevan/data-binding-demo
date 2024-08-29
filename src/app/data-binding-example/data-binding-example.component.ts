import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent {
  name: string = 'John Doe';  // Used for two-way data binding
  message: string = '';  // Used for event binding

  onButtonClick() {
    this.message = `Hello, ${this.name}!`;
  }
}

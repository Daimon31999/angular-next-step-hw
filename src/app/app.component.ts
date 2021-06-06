import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-currency-convertor-hw';

  name = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');

  userList: { name: string; age: number; email: string }[] = [];
  onSubmit() {
    let obj = {
      name: this.name.value,
      age: this.age.value,
      email: this.email.value,
    };
    this.userList.push(obj);
  }
}

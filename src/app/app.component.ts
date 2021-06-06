import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-currency-convertor-hw';

  indianRupeeToMdl = 0.24;
  myInput = new FormControl('');
  mdl = 0;
  ngOnInit() {
    this.myInput.valueChanges.subscribe((value) => {
      this.mdl = this.indianRupeeToMdl * Number(this.myInput.value);
    });
  }
}

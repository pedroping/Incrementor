import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-incrementor',
  templateUrl: './show-incrementor.component.html',
  styleUrls: ['./show-incrementor.component.scss'],
})
export class ShowIncrementorComponent {
  incrementoControl = new FormControl(0, Validators.required);
}

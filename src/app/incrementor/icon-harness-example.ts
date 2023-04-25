import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

/**
 * @title Testing with MatIconHarness
 */
@Component({
  selector: 'icon-harness-example',
  templateUrl: 'icon-harness-example.html',
  styleUrls: ['./icons-harmess-example.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconHarnessExample),
      multi: true,
    },
  ],
})
export class IconHarnessExample implements ControlValueAccessor, OnInit {
  incrementorControl = new FormControl();
  disabled: boolean;
  onChanged: (stars: number) => void;
  onTouched: () => void;

  ngOnInit() {
    this.incrementorControl.valueChanges.subscribe((val) => {
      this.onChanged(val);
      this.onTouched();
    });
  }

  writeValue(value: number) {
    this.incrementorControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (stars: number) => void) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  caclValue(val: number) {
    const actualVal = this.incrementorControl.value! + val;
    this.incrementorControl.setValue(actualVal < 0 ? 0 : actualVal);
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

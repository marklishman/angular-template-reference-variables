import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size-ref',
  template: `
    <p>
      <app-font-size #compRef></app-font-size>
    </p>
    <input #size
           type="number"
           value="{{compRef.fontSize}}"
           (change)="compRef.fontSize=size.value">
    <button (click)="compRef.reset()">Reset</button>
  `
})
export class FontSizeRefComponent {
}

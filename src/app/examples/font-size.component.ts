import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size',
  template: `
    <button (click)="para.contentEditable = !para.isContentEditable">{{buttonText(para)}}</button>
    <button (click)="fontSize = fontSize + (bigger.checked ? 3 : -3)">Resize</button>
    <label>
      <input #bigger type="checkbox" checked (change)="0">
      {{bigger.checked ? 'bigger' : 'smaller'}}
    </label>
    <p ref-para [style.fontSize.px]="fontSize">
      This is some text
    </p>
  `,
})
export class FontSizeComponent {
  fontSize: number;

  constructor() {
    this.reset();
  }

  buttonText(para: HTMLParagraphElement): string {
    return para.isContentEditable ? 'Read only' : 'Edit';
  }

  reset(): void {
    this.fontSize = 10;
  }
}

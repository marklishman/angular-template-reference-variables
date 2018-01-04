import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: `
    <textarea #refVar (keyup)="0" (select)="0">This is a text area</textarea>
    <p>Total: {{refVar.textLength}}</p>
    <p>Selected: {{refVar.selectionStart}} to {{refVar.selectionEnd}}</p>
    <p>
      <button (click)="refVar.select()">Select All</button>
      <button (click)="log(refVar)">Log</button>
      <button (click)="refVar.value = ''">Clear</button>
    </p>
    <p>{{logData}}</p>
  `
})
export class TextAreaComponent {
  logData: string;

  log(textarea: HTMLTextAreaElement): void {
    this.logData = textarea.value;
  }
}

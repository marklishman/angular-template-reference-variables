import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: `
    <textarea #textArea (keyup)="0" (select)="0">This is a text area</textarea>
    <p>Total: {{textArea.textLength}}</p>
    <p>Selected: {{textArea.selectionStart}} to {{textArea.selectionEnd}}</p>
    <p>
      <button (click)="textArea.select()">Select All</button>
      <button (click)="log(textArea)">Log</button>
      <button (click)="textArea.value = ''">Clear</button>
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

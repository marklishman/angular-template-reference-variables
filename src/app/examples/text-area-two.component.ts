import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-two',
  template: `
    <p>
      <textarea #refVar (keyup)="0" (select)="0">Change or highlight som of this text</textarea>
    </p>
    <div>length: {{refVar.textLength}}</div>
    <div>selectionStart: {{refVar.selectionStart}}</div>
    <div>selectionEnd: {{refVar.selectionEnd}}</div>
    <p>
      <button (click)="refVar.select()">Select All</button>
      <button (click)="log(refVar)">Log</button>
      <button (click)="refVar.value = 'Some different text'">Change</button>
    </p>
    <p>{{logData}}</p>
  `
})
export class TextAreaTwoComponent {
  logData: string;

  log(textarea: HTMLTextAreaElement): void {
    this.logData = textarea.value;
  }
}

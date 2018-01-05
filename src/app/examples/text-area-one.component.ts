import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-one',
  template: `
    <p>
      <textarea #refVar (keyup)="0" (select)="0">Change or highlight some of this text</textarea>
    </p>
    <div>textLength: {{refVar.textLength}}</div>
    <div>selectionStart: {{refVar.selectionStart}}</div>
    <div>selectionEnd: {{refVar.selectionEnd}}</div>
    <p>
      <button (click)="refVar.select()">
        Select All
      </button>
      <button (click)="refVar.value = ''"
              [disabled]="refVar.value === ''">
        Clear
      </button>
    </p>
  `
})
export class TextAreaOneComponent {
}

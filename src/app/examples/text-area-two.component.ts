import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-two',
  template: `
    <button (click)="refVar.cols = refVar.cols + (grow.checked ? 2 : -2)"
            [disabled]="shrink.checked && refVar.cols < 20">
      {{grow.checked ? growLabel.title : shrinkLabel.title}}
    </button>
    <label #shrinkLabel title="Shrink">
      <input ref-shrink
             type="radio"
             name="size"
             (change)="0">
      Smaller
    </label>
    <label #growLabel title="Grow">
      <input ref-grow
             type="radio"
             name="size"
             (change)="0"
             checked>
      Bigger
    </label>
    <p>
      <textarea #refVar
                [readonly]="isReadOnly.checked"
                cols="30"
                rows="3">Grow or shrink this text box</textarea>
    </p>
    <label>
      <input #isReadOnly type="checkbox" (change)="0">
      Read only
    </label>
    <p>
      <button (click)="logMessage(refVar, isReadOnly, growLabel, grow)">Log</button>
    </p>
    <p>{{message}}</p>
  `
})
export class TextAreaTwoComponent {
  message: string;

  logMessage(textArea: HTMLTextAreaElement,
             readOnly: HTMLInputElement,
             growLabel: HTMLLabelElement,
             grow: HTMLInputElement): void {
    this.message = `${textArea.textLength} characters,
                    ${readOnly.checked ? 'read only' : 'editable'},
                    ${growLabel.title} is ${grow.checked}`;
  }
}

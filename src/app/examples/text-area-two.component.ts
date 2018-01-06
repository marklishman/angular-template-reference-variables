import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-two',
  template: `
    <label>
      <input ref-isReadOnly type="checkbox" (change)="0">
      Read only
    </label>
    <p>
      <textarea #textArea
                [readonly]="isReadOnly.checked"
                cols="25"
                rows="3">one two three four</textarea>
    </p>
    <p>
      <button (click)="logMessage(textArea, isReadOnly)">Message</button>
    </p>
    <p>{{message}}</p>
  `
})
export class TextAreaTwoComponent {
  message: string;

  logMessage(textArea: HTMLTextAreaElement,
             readOnly: HTMLInputElement): void {

    this.message = `This text "${textArea.value}" is
                    ${readOnly.checked ? 'read only' : 'editable'}`;
  }
}

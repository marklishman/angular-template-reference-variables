import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  template: `
    <p #para *ngIf="true">
      This is displayed because ngIf is true
    </p>
    but #para is still undefined: {{para === undefined}}
  `,
})
export class ConditionalComponent {
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  template: `
    <p #para *ngIf="true">
      Some text
    </p>
    #para === undefined: {{para === undefined}}
  `,
})
export class ConditionalComponent {
}

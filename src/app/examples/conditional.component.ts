import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  template: `
    <p #para *ngIf="true">
      Some text
    </p>
    <div>
      #para === undefined: {{para === undefined}}
    </div>
  `,
})
export class ConditionalComponent {
}

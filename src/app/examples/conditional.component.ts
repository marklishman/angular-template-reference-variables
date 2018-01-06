import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  template: `
    <p #para *ngIf="true">
      Some text
    </p>
    <!-- Fails production build -->
    <!--#para === undefined: {{para === undefined}}-->
  `,
})
export class ConditionalComponent {
}

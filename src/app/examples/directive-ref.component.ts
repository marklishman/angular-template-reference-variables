import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ref',
  template: `
    <p appBlue>
      Some blue text using the appBlue directive
    </p>

    <p appBlue #blueRef="appBlue">
      {{blueRef.message}}
    </p>

    <article appBlue
             ref-b="appBlue"
             ref-el>
      {{b.aMethod()}} and is inside {{el.tagName}} tags
    </article>

    <p appBlue #blue="appBlue"
       appClicker #clicker="clicker">
      {{blue.message}} (click me)
    </p>

    <p>{{clicker.clicks}}</p>
    <button (click)="clicker.reset()">Reset</button>
  `
})
export class DirectiveRefComponent {
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-green',
  template: '<span>This text is from the GreenComponent template</span>',
  styles: ['span {color: green}']
})
export class GreenComponent {

  short = false;

  message(): string {
    return this.short ? 'From GreenComponent' : 'This text is returned from a GreenComponent getter method';
  }
}

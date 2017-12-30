import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBlue]',
  exportAs: 'appBlue',
})
export class BlueDirective {
  message = 'This text is from a BlueDirective property';

  @HostBinding('style.color')
  textColor = 'blue';
}

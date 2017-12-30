import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClicker]',
  exportAs: 'clicker'
})
export class ClickDirective {

  private _clickCount = 0;

  @HostListener('click') onClick() {
    this._clickCount++;
  }

  get clicks(): string {
    return `Number of clicks is ${this._clickCount}`;
  }

  reset(): void {
    this._clickCount = 0;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <app-timer #timer></app-timer>
    <button (click)="timer.start()" [disabled]="timer.isTimeSet">Start</button>
    <button (click)="timer.stop()" [disabled]="!timer.isRunning">Stop</button>
    <button (click)="timer.reset()" [disabled]="!timer.isTimeSet">Reset</button>
  `
})
export class StopwatchComponent {
}

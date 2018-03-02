import { Component } from '@angular/core';
import { TimerComponent } from './timer.component';

@Component({
  selector: 'app-typing-test',
  template: `
    <header>Type the movie quote in the box as fast as you can.</header>
    <h2 #text>{{phrase}}</h2>
    <textarea #answer
      (keydown)="timer.isRunning || timer.start()"
      (keyup)="checkAnswer(answer.value, timer)"
      placeholder="Type the phrase here"
      cols="50" rows="5"></textarea>
    <div>
      <button (click)="answer.value=''; next()">Next</button>
    </div>
    <div [hidden]="answer.value !== text.innerText">
      <app-timer #timer></app-timer>
    </div>
  `
})
export class TypingTestComponent {
  private phrases: string[] = [
    'We\'re gonna need a bigger boat.',
    'What doesn\'t kill you makes you stranger.',
    'The first rule of project mayhem is you do not ask questions.',
    'As far back as I can remember, I always wanted to be a gangster.',
    'I want you to deal with your problems by becoming rich!'
  ];

  private position = 0;

  checkAnswer(answer: string, timer: TimerComponent): void {
    if (answer === this.phrase) {
      timer.stop();
    }
  }

  next(): void {
    this.position = this.position === this.phrases.length - 1 ? 0 : this.position + 1;
  }

  get phrase(): string {
    return this.phrases[this.position];
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextAreaComponent } from './examples/text-area.component';
import { FontSizeComponent } from './examples/font-size.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectiveRefComponent } from './examples/directive-ref.component';
import { BlueDirective } from './examples/blue.directive';
import { ClickDirective } from './examples/click.directive';
import { FontSizeRefComponent } from './examples/font-size-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueDirective,
    ClickDirective,
    DirectiveRefComponent,
    FontSizeComponent,
    FontSizeRefComponent,
    TextAreaComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

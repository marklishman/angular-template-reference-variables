import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TextAreaOneComponent} from './examples/text-area-one.component';
import {FontSizeComponent} from './examples/font-size.component';
import {DirectiveRefComponent} from './examples/directive-ref.component';
import {FontSizeRefComponent} from './examples/font-size-ref.component';
import {TextAreaTwoComponent} from './examples/text-area-two.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { TextAreaThreeComponent } from './examples/text-area-three.component';

const routes: Routes = [
  {path: '', redirectTo: '/text-area-one', pathMatch: 'full'},
  {path: 'text-area-one', component: TextAreaOneComponent},
  {path: 'text-area-two', component: TextAreaTwoComponent},
  {path: 'text-area-three', component: TextAreaThreeComponent},
  {path: 'font-size', component: FontSizeComponent},
  {path: 'font-size-ref', component: FontSizeRefComponent},
  {path: 'directive-ref', component: DirectiveRefComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextAreaComponent } from './examples/text-area.component';
import { FontSizeComponent } from './examples/font-size.component';
import { DirectiveRefComponent } from './examples/directive-ref.component';
import { FontSizeRefComponent } from './examples/font-size-ref.component';

const routes: Routes = [
  {path: '', redirectTo: '/text-area', pathMatch: 'full'},
  {path: 'text-area', component: TextAreaComponent},
  {path: 'font-size', component: FontSizeComponent},
  {path: 'font-size-ref', component: FontSizeRefComponent},
  {path: 'directive-ref', component: DirectiveRefComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

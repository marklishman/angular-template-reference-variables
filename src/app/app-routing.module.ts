import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextAreaComponent } from './examples/text-area.component';
import { FontSizeComponent } from './examples/font-size.component';
import { CustomComponent } from './examples/custom.component';
import { FontSizeRefComponent } from './examples/font-size-ref.component';

const routes: Routes = [
  {path: '', redirectTo: '/text-area', pathMatch: 'full'},
  {path: 'text-area', component: TextAreaComponent},
  {path: 'font-size', component: FontSizeComponent},
  {path: 'font-size-ref', component: FontSizeRefComponent},
  {path: 'custom', component: CustomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

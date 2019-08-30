//With the routing module we will have the option to make
//other paths with other routes in the future

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './_components/main/main.component';

//in this moment we have only the MainComponent view,
//all paths will redirect to it
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

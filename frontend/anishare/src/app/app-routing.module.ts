import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component: SearchComponent
  },
  {
    path:'contact',
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

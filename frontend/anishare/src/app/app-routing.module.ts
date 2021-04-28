import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { PropoComponent } from './propo/propo.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'contact',
    component : ContactComponent
  },
  {
    path: 'apropos',
    component : PropoComponent
  },
  {
    path: 'inscription',
    component : InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

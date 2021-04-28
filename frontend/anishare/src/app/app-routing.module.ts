import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { PropoComponent } from './propo/propo.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { AjoutImageComponent } from './ajout-image/ajout-image.component';

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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ajout-image',
    component: AjoutImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

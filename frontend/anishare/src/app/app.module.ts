import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './search/search.component';
import {PropoComponent} from './propo/propo.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {FiltreService} from './service/filtre.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SearchComponent,
    PropoComponent,
    InscriptionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FiltreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

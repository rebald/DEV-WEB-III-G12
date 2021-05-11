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
import {AffichageComponent} from './affichage/affichage.component';
import {InscriptionService} from './service/inscription.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SearchComponent,
    PropoComponent,
    InscriptionComponent,
    AffichageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FiltreService, InscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

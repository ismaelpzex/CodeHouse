import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EuropeComponent } from './components/europe/europe.component';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { MonedaPipe } from './pipes/moneda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EuropeComponent,
    CountryViewComponent,
    MonedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // importamos el modulo principal de la libreria agm y tenemos que pasarle el apiKey de envitonments
    AgmCoreModule.forRoot(environment.googleMaps),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

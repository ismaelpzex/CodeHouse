import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { FormComponent } from './components/form/form.component';
import { VistaEmpleadosComponent } from './components/vista-empleados/vista-empleados.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpleadoCardComponent } from './components/empleado-card/empleado-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaEmpleadosComponent,
    FormComponent,
    VistaEmpleadosComponent,
    HeaderComponent,
    FooterComponent,
    EmpleadoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { VistaEmpleadosComponent } from './components/vista-empleados/vista-empleados.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "empleados", component: ListaEmpleadosComponent },
  { path: "nuevo-empleado", component: FormComponent },
  { path: "empleado/:idempleado", component: VistaEmpleadosComponent },
  { path: "**", redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

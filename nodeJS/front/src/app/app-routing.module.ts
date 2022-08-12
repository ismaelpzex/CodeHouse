import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "home", pathMatch: 'full', component: FormContactoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

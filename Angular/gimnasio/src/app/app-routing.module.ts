import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './components/clients/form-client/form-client.component';
import { ListClientComponent } from './components/clients/list-client/list-client.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clients' },
  { path: 'clients', component: ListClientComponent },
  { path: 'clients/new', component: FormClientComponent },
  { path: '**', redirectTo: '/list-clients' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

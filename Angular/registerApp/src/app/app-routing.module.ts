import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PresentComponent } from './components/present/present.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'loggin', component: LogginComponent },
  // { path: 'present/:token', component: PresentComponent },
  { path: 'present', component: PresentComponent, canActivate: [LoginGuardGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuardGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
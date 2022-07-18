import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { DashboeardComponent } from './components/dashboeard/dashboeard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'dashboard', component: DashboeardComponent, canActivate: [LoginGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'characters' },
      { path: 'characters', component: CharactersListComponent },
      { path: 'character-view/:idcharacter', component: CharacterViewComponent }
      //characterView,
      //
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

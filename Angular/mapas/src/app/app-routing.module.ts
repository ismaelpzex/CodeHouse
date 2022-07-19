import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { EuropeComponent } from './components/europe/europe.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "europe", component: EuropeComponent },
  { path: "country/:code", component: CountryViewComponent },
  { path: "**", redirectTo: 'EuropeComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

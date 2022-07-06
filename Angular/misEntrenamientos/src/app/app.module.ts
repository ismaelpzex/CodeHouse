import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListExerciseComponent,
    TotalsComponent,
    ExerciseComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

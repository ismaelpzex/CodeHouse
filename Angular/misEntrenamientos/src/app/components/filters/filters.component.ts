import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise.interface';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  exercises: Exercise[] = [];
  constructor(private exerciseService: ExercisesService) {

  }

  ngOnInit(): void {
  }

  filterByTitle($event: any) {
    this.exerciseService.getExerciseByTitle($event.target.value);
  }

  filterByTime($event: any) {
    this.exerciseService.getExerciseByTime($event.target.value);
  }

  filterByDate($event: any) {
    this.exerciseService.getExerciseByDate($event.target.value);
  }

}

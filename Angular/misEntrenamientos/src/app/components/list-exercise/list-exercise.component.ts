import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise.interface';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})
export class ListExerciseComponent implements OnInit {

  exercises: Exercise[] = [];
  constructor(private exerciseService: ExercisesService) {

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.exercises = this.exerciseService.getAll();
  }

  deleteExercise(id: number) {
    let result = this.exerciseService.deleteExercise(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { newExerciseRequest } from 'src/app/interfaces/new-exercise-request.interface';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newExercise: newExerciseRequest;
  constructor(private exerciseService: ExercisesService) {
    this.newExercise = {
      id: 0,
      title: "",
      duration: 0,
      date: ""
    }
  }

  ngOnInit(): void {
  }

  addExercise(): void {
    if (this.newExercise.title.trim() !== "" && this.newExercise.title.trim() !== "") {
      this.exerciseService.addExercise(this.newExercise);
      this.clearRequest();
    } else alert("Campos vacíos");
  }

  private clearRequest(): void {
    this.newExercise = {
      id: 0,
      title: "",
      duration: 0,
      date: "",
    }
  }

}

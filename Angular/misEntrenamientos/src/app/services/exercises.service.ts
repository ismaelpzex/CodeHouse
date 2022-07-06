import { Injectable } from '@angular/core';
import { EXERCISE } from '../db/exercises.db';
import { Exercise } from '../interfaces/exercise.interface';
import { newExerciseRequest } from '../interfaces/new-exercise-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private arrExercises: Exercise[] = []
  private id: number = 0;
  private printExercises: Exercise[] = []
  constructor() {
    this.arrExercises = EXERCISE;
    this.printExercises = this.arrExercises;
  }

  getAll(): Exercise[] {
    return this.printExercises;
  }

  addExercise($data: newExerciseRequest) {
    $data.id = this.id;
    this.arrExercises.push($data);
    this.id++
  }

  deleteExercise(id: number) {
    this.printExercises = this.arrExercises.filter(value => value.id !== id);
    this.arrExercises = this.printExercises;
  }

  timeTotal(): number {
    const arrTime: number[] = [];
    this.printExercises.forEach(value => arrTime.push(value.duration));
    return arrTime.reduce((a, b) => a + b, 0);
  }

  getExerciseByTitle(title: string): void {
    this.printExercises = this.arrExercises.filter(exercise => exercise.title.includes(title));
  }

  getExerciseByTime(filter: string) {
    switch (filter) {
      case 'short':
        this.printExercises = this.arrExercises.filter(exercise => exercise.duration <= 30);
        break;
      case 'medium':
        this.printExercises = this.arrExercises.filter(exercise => exercise.duration >= 30 && exercise.duration <= 60);
        break;
      case 'long':
        this.printExercises = this.arrExercises.filter(exercise => exercise.duration > 60);
        break;
      default:
        this.printExercises = this.arrExercises;
    }
  }

  getExerciseByDate(date: string) {
    this.printExercises = this.arrExercises.filter(exercise => exercise.date.includes(date));
  }

}

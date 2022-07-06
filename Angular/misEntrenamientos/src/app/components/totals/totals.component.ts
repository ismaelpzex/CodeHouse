import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise.interface';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  kcals: number = 0;
  time: number = 0;
  private exercises: Exercise[] = [];

  constructor(private exerciseService: ExercisesService) {
    this.exercises = exerciseService.getAll();
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  ngDoCheck(): void {
    this.totalTime();
    this.totalKcal();

  }

  totalTime(): void {
    this.time = this.exerciseService.timeTotal();

  }

  totalKcal(): void {
    this.kcals = 0;
    this.kcals = this.time * 4;
  }
}





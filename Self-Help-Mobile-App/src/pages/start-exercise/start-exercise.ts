import {Component, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MyService} from "./start-exercise.service";
import {ExerciseModel} from "./exercise.model";
import {observable} from "rxjs/symbol/observable";
import {Observable} from "rxjs";


@Component({
  selector: 'page-start-exercise',
  templateUrl: 'start-exercise.html',
  providers: [MyService]
})
export class StartExercisePage {
  activated: boolean = false;
  selectExercise: ExerciseModel;

  exercises: ExerciseModel[] = [
    new ExerciseModel("jumpingJacks", "Jumping jacks"),
    new ExerciseModel("wallSit", "Wall sit"),
    new ExerciseModel("pushUps", "Push-ups"),
    new ExerciseModel("abdominalCrunches", "JAbdominal Crunches"),
    new ExerciseModel("stepOntoChair", "Step-up onto chair"),
    new ExerciseModel("squat", "JSquat"),
    new ExerciseModel("tricepsOnChair", "Triceps dip on chair"),
    new ExerciseModel("plank", "Plank"),
    new ExerciseModel("highKnees", "High knees running in place"),
    new ExerciseModel("lunges", "Lunges"),
    new ExerciseModel("pushUpRotation", "Push-up rotation"),
    new ExerciseModel("sidePlank", "Side Plank"),
  ];

  countDownTimer: Observable<number>;
  counter = 10;

  constructor(
    public myService: MyService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private elementRef: ElementRef
  ) {

  }

  start() {
    this.activated = true;
    this.countDownTimer = this.myService.getCounter().do(() => --this.counter);
    //this.countDownTimer = this.myService.getCounter();
    this.myService.timerSwitch = true;

    this.countDownTimer.subscribe(
      timer => {
        if (timer == 0) {
          this.selectExercise.completed = true;
          this.selectExercise.date = new Date();

          this.reportCompletion();
        }
      }
    )
  }

  resetTimer() {
    this.activated = false;
    this.myService.timerSwitch = false;
    this.myService.counter = 30;
    this.countDownTimer = this.myService.getCounter();
  }

  pauseTimer() {
    this.myService.timerSwitch = false;
  }

  resume() {
    this.myService.timerSwitch = true;
  }

  reportCompletion() {
    console.log('selected Exercise', this.selectExercise);
  }
}



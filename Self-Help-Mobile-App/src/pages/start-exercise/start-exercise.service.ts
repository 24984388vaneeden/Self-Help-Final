import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ExerciseModel} from "./exercise.model";

@Injectable()
export class MyService {
  timerSwitch: boolean = true;
  counter = 30;
  // counterArray = [30, 10, 30, 10, 30, 10]
  tick = 1000;

  getCounter() {
    return Observable.timer(0, this.tick)
      .take(this.counter)
      .filter(() => this.timerSwitch)
      .map(() => --this.counter)
  }
}

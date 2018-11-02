import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
//import { ItemDetailsPage } from '../item-details/item-details';
import {FitnessInstructionsPage} from '../fitness-instructions/fitness-instructions'
import {CalendarPage} from '../calendar/calendar';
import {StartExercisePage} from '../start-exercise/start-exercise';

@Component({
  selector: 'page-fitness-program',
  templateUrl: 'fitness-program.html',
})
export class FitnessProgramPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toStartExercise(event, item) {
    this.navCtrl.push(StartExercisePage, {
      item: item
    });
  }

  toFitnessInstructions(event, item) {
    this.navCtrl.push(FitnessInstructionsPage, {
      item: item
    });
  }

  toCalendar(event, item) {
    this.navCtrl.push(CalendarPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessProgramPage');
  }

}

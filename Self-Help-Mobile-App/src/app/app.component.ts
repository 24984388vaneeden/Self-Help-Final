import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';

import {HelloIonicPage} from '../pages/home/home';
import {FitnessProgramPage} from '../pages/fitness-program/fitness-program';
import {DailyChallengePage} from '../pages/daily-challenge/daily-challenge';
import {MeditationPage} from '../pages/meditation/meditation';
import {CalendarPage} from '../pages/calendar/calendar';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = localStorage.getItem("authToken") ? LoginPage : HelloIonicPage;//HelloIonicPage
  pages: Array<{ title: string, component: any }>;

  countDown;
  counter = 10;

  constructor
  (
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    // private myService: MyService
  ) {
    // this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Self-Help Status', component: HelloIonicPage},
      // { title: 'Motivation', component: ListPage },
      {title: 'High Intensity Workout', component: FitnessProgramPage},
      {title: 'Meditation', component: MeditationPage},
      {title: 'Daily Challenges', component: DailyChallengePage},
      {title: 'Calendar', component: CalendarPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {pages} from '../pages';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Calendar} from '@ionic-native/calendar';
import {NativeAudio} from '@ionic-native/native-audio';
import {FormatTimePipe} from "./pipes/format-time.pipe";
import {HttpClientModule} from "@angular/common/http";
import {services} from "./services";

@NgModule({
  declarations: [
    MyApp,
    pages,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    NativeAudio,
    services
  ]
})
export class AppModule {
}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';
import {NativeAudio} from '@ionic-native/native-audio';

@Component({
  selector: 'page-meditation',
  templateUrl: 'meditation.html',
})
export class MeditationPage {

  // icons: string[];
  // icon: string;
  audio: string[] = [];
  // items: Array<{ title: string, note: string, icon: string, audio: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //   'american-football', 'boat', 'bluetooth', 'build'];

    this.audio = [
      'assets/sounds/30Sec2Mars.mp3',
      'assets/sounds/ACDC.mp3',
      'assets/sounds/aking.mp3',
      'assets/sounds/bfs.mp3',
    ];

    // this.icon = 'musical-note';
  }

  itemTapped(item: string): void {
    this.navCtrl.push(ItemDetailsPage, {
        item: item
      }
    );
    // this.nativeAudio.preloadSimple('acdc', 'assets/sounds/ACDC.mp3');
    // this.nativeAudio.play('acdc');
  }


}

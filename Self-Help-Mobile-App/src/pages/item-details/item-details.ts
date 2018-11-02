import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {NativeAudio} from '@ionic-native/native-audio';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  // selectedItem: any;

  selectedItemSrc: string = 'assets/sounds/ACDC.mp3';

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItemSrc = navParams.get('item');
  }


  playAudio() {
    this.nativeAudio.play(this.selectedItemSrc);
  }
}

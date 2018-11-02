import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {LoginModel} from "./login.model";
import {LoginService} from "./login.service";
import {HelloIonicPage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  loginData = new LoginModel();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private service: LoginService) {
  }

  submitLogin(): void {
    this.service.login(this.loginData)
      .subscribe(response => {
        this.service.storeToken(response.token);
        this.navCtrl.setRoot(HelloIonicPage);
      }, error => {
        let alert = this.alertCtrl.create({
          title: 'Error!',
          message: 'Error login in. Please check your credentials.',
          buttons: ['OK']
        });

        alert.present();
      });
  }
}

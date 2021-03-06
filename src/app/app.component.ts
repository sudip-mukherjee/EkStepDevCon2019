import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistrationPage } from '../pages/registration/registration';
import { PreferenceKey } from './app.constant';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Device } from '@ionic-native/device';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RegistrationPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private appPreference: AppPreferences,
    private device: Device
    ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.isAlreadyRegistered();
    });
  }

  isAlreadyRegistered() {
    this.appPreference.fetch(PreferenceKey.DEVICE_ID).then( val => {
      if(val === this.device.uuid) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = RegistrationPage;
      }
    })

  }
}


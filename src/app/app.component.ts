import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LandingPage } from '../pages/landing/landing';
import {EmbarkationPage} from "../pages/embarkation/embarkation";
import {ParkingTransportPage} from "../pages/parking-transport/parking-transport";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  settingsPage = LandingPage;
  displayPage = LandingPage ;
  parkingPage = ParkingTransportPage;
  @ViewChild('nav') nav: NavController;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.push(page);
    this.menuCtrl.close();
  }

  emba(){
    this.nav.push(EmbarkationPage);
    this.menuCtrl.close();
  }

}


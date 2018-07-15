import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import {EmbarkationPage} from "../pages/embarkation/embarkation";

//components
import { ComponentsTitleComponent } from '../components/components-title/components-title'
import {ComponentsWeatherComponent} from "../components/components-weather/components-weather";
import {EmbarkationComponent} from "../components/embarkation/embarkation";
import {LandingMenuComponent} from "../components/landing-menu/landing-menu";



@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationPage,
    EmbarkationComponent,
    LandingMenuComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    ComponentsTitleComponent,
    ComponentsWeatherComponent,
    EmbarkationPage,
    EmbarkationComponent,
    LandingMenuComponent,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

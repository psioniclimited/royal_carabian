import { Component } from '@angular/core';

/**
 * Generated class for the LandingMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'landing-menu',
  templateUrl: 'landing-menu.html'
})
export class LandingMenuComponent {

  text: string;

  button_data:{background:string, image:string, lable:string}[] =[
    {"background":"assets/Tabs/1.png","image":"assets/imgs/Embarkation.png","lable":"EMBARKATION"},
    {"background":"assets/Tabs/2.png","image":"assets/imgs/Disembarkation.png","lable":"DISEMBARKATION"},
    {"background":"assets/Tabs/3.png","image":"assets/imgs/Security.png","lable":"SECCURITY"},
    {"background":"assets/Tabs/4.png","image":"assets/imgs/Restriction.png","lable":"RESTRICTION"},
    {"background":"assets/Tabs/5.png","image":"assets/imgs/Parking.png","lable":"PARKING"},
    {"background":"assets/Tabs/6.png","image":"assets/imgs/Documents.png","lable":"DOCUMENTS"},
  ];

  constructor() {
    console.log('Hello LandingMenuComponent Component');
    this.text = 'Hello World';
  }

}

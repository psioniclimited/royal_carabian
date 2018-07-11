import { Component } from '@angular/core';

/**
 * Generated class for the EmbarkationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'embarkation',
  templateUrl: 'embarkation.html'
})
export class EmbarkationComponent {

  text: string;
  constant_data:{title:string, time:string, image:string, description:string}[] =[
    {"title":"PRE BOARDING", "time":"10:30 AM","image":"assets/background/embrkicon1.png","description":"Lorem ipsum dolor sit amet,  maxime modi non pariatur recusandae? Ex explicabo facere laborum."},
    {"title":"BOARDING", "time":"12:30 PM","image":"assets/background/embrkicon1.png","description":"Lorem ipsum dolor sit amet,  maxime modi non pariatur recusandae? Ex explicabo facere laborum."},
    {"title":"LAST CALL", "time":"02:00 PM","image":"assets/background/embrkicon1.png","description":"Lorem ipsum dolor sit amet,  maxime modi non pariatur recusandae? Ex explicabo facere laborum."},
    {"title":"SAILING", "time":"90 MINUTES BEFORE SAILING","image":"assets/background/embrkicon1.png","description":"Lorem ipsum dolor sit amet,  maxime modi non pariatur recusandae? Ex explicabo facere laborum."}
  ];

  constructor() {

  }

}

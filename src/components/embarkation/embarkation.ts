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

  constructor() {
    console.log('Hello EmbarkationComponent Component');
    this.text = 'Hello World';
  }

}

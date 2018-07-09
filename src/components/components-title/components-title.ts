import {Component, Input} from '@angular/core';

/**
 * Generated class for the ComponentsTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-title',
  templateUrl: 'components-title.html'
})
export class ComponentsTitleComponent {
@Input() title: string;
constructor(){}
}

import { Component, Input } from '@angular/core';

import {FirebaseListObservable} from 'angularfire2/database';

/**
 * Generated class for the StrikesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'strikes',
  templateUrl: 'strikes.html'
})
export class StrikesComponent {

  text: string;

  @Input() strikes: FirebaseListObservable<any[]>;

  constructor() {
  }


  strikeGroup(){

  }

  favorite(){}

  share(){}
}

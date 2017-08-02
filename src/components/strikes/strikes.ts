import { Component } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

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

  strikes: FirebaseListObservable<any[]>;

  constructor(afConnection:AngularFireDatabase) {
      this.strikes = afConnection.list("/strikeItems");
  }


  strikeGroup(){

  }

  favorite(){}

  share(){}
}

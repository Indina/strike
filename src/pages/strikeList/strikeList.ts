import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {StrikeListItem} from '../../model/strikeListItem';

@Component({
  selector: 'page-strikelist',
  templateUrl: 'strikeList.html'
})
export class StrikeListPage {

  strikeList: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, afConnection:AngularFireDatabase) {
      this.strikeList = afConnection.list("/strikeListItems");
  }

}

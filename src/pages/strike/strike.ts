import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import {StrikeItem} from '../../model/strikeItem';
import {SendPage} from '../send/send';


@Component({
  selector: 'page-strike',
  templateUrl: 'strike.html'
})
export class StrikePage {

  strike: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, afConnection:AngularFireDatabase) {
      this.strike = afConnection.list("/strikeItems");
  }


send(){
this.navCtrl.push(SendPage);

}
}




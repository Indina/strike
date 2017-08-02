import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {StrikeListItem} from '../../model/strikeListItem';
import{NewStrikePage} from '../newstrike/newstrike';
import{StrikeGroupPage} from '../strikegroup/strikegroup';



@Component({
  selector: 'page-strikelist',
  templateUrl: 'strikeList.html'
})
export class StrikeListPage {

  strikeList: FirebaseListObservable<any[]>;

  pakker:string ="strikes";

  constructor(public navCtrl: NavController, afConnection:AngularFireDatabase) {
      this.strikeList = afConnection.list("/strikeListItems");
  }



newStrike(){
this.navCtrl.push(NewStrikePage);

}


strikeGroup(){
this.navCtrl.push(StrikeGroupPage);

}





}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import{NewStrikePage} from '../newstrike/newstrike';
import{ProfilePage} from '../profile/profile';
import { DatabaseProvider } from "../../providers/databaseserver/databaseserver";


@Component({
  selector: 'page-strikelist',
  templateUrl: 'strikeList.html'
})
export class StrikeListPage {

  strikes: FirebaseListObservable<any[]>;


  pakker:string ="strikes";

  constructor(public navCtrl: NavController, db:DatabaseProvider) {
      this.strikes = db.allStrikes();
  }


profile(){
this.navCtrl.push(ProfilePage);

}

newStrike(){
this.navCtrl.push(NewStrikePage);

}








}

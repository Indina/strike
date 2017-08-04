import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import{NewStrikePage} from '../newstrike/newstrike';
import{ProfilePage} from '../profile/profile';


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


profile(){
this.navCtrl.push(ProfilePage);

}

newStrike(){
this.navCtrl.push(NewStrikePage);

}








}

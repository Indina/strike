import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{SettingsPage} from '../settings/settings';

import{ServicesPage} from '../services/services';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  
constructor(public navCtrl: NavController) {

}



settings(){
this.navCtrl.push(SettingsPage);

}

services(){
this.navCtrl.push(ServicesPage);

}

}





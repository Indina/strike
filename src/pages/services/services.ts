import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';








@Component({

  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  
constructor(public navCtrl: NavController ,public alertCtrl: AlertController) {

  }






presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Kjøp pakke',
    message: 'Ønsker du å kjøpe denne pakken?',
    buttons: [
      {
        text: 'Avvis',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Kjøp',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}


}
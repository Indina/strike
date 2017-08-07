import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
import{StrikeGroupPage} from '../../pages/strikegroup/strikegroup';

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

  constructor(public navCtrl: NavController) {

    
    
  }


  strikeGroup(){
this.navCtrl.push(StrikeGroupPage);
  }

  favorite(){}

  share(){}
}

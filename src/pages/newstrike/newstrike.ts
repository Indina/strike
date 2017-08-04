import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Strike } from '../../model/strike';
import { DatabaseProvider } from "../../providers/databaseserver/databaseserver";
import { StrikeListPage } from "../strikeList/strikeList";
import { StrikeType } from "../../model/strikeType";
import { StrikePoint } from "../../model/strikePoint";

@Component({
  selector: 'page-newstrike',
  templateUrl: 'newstrike.html'
})
export class NewStrikePage {

strikeTypes:StrikeType[];
selectedStrikeType:StrikeType;

strikePoints:StrikePoint[];
selectedStrikePoint:StrikePoint;

title:string;
description:string;
img: string = 'assets/icon/photo-camera.svg';
points:number;


newStrike:Strike;

constructor(public navCtrl: NavController, public db : DatabaseProvider) {

  this.strikeTypes = db.strikeTypes();
  this.selectedStrikeType = this.strikeTypes[0];

  this.strikePoints= db.strikePoints();
  this.selectedStrikePoint = this.strikePoints[0];
}



save(){


  this.newStrike = new Strike();
  this.newStrike.title  = this.title;
  this.newStrike.description = this.description;
  this.newStrike.img = this.img;
  this.newStrike.type = this.selectedStrikeType.name;
  this.newStrike.typeImgSrc = this.selectedStrikeType.imgSrc;
  this.newStrike.points = this.selectedStrikePoint.value;


  this.db.saveNewStrike(this.newStrike).then(res=>{
    this.navCtrl.push(StrikeListPage); // Gå til strikes listen

  });
}



}


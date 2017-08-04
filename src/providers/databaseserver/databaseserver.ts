import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Strike } from "../../model/strike";
import { StrikeType } from "../../model/strikeType";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { StrikePoint } from "../../model/strikePoint";

/*
  Generated class for the DatabaseserverProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DatabaseProvider {


  private _af : AngularFireDatabase;
  private _strikeTypes: StrikeType[];


  constructor(public http: Http, af:AngularFireDatabase ) {
    this._af =af;
    this._strikeTypes =  [
      new StrikeType("Hjertesak", "Hjertesak",'assets/images/elementType/heart.svg'),
      new StrikeType("Helse", "Helse",'assets/images/elementType/fit.svg'),
      new StrikeType("Trendy", "Trendy",'assets/images/elementType/fire.svg'),
      new StrikeType("Selvmestring", "Selvmestring",'assets/images/elementType/creative.svg'),
      new StrikeType("Toxic", "Toxic",'assets/images/elementType/toxic.svg'),
  ]
  }


strikeTypes() : StrikeType[]{

  return this._strikeTypes;


}



strikePoints() : StrikePoint[]{

  return [
      new StrikePoint(80, "Litt vikitg"),
      new StrikePoint(90, "Viktig"),
      new StrikePoint(100, "Esssensielt"),
      new StrikePoint(110, "Fantastisk"),
      new StrikePoint(120, "Nirvana"),
  ]


}




saveNewStrike(strike : Strike){

  let thenable =  this._af.list('/strikes').push(strike);
  thenable.catch(this.onError);
  return thenable;


}

allStrikes(userId : number = 0) : FirebaseListObservable<any[]>{

    return this._af.list('/strikes');

}

onError(error : Error){}


}


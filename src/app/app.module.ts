import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StrikeListPage } from '../pages/strikeList/strikeList';
import { StrikePage } from '../pages/strike/strike';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SendPage } from '../pages/send/send';
import { WallPage } from '../pages/wall/wall';
import { SettingsPage } from '../pages/settings/settings';
import { NewStrikePage } from '../pages/newstrike/newstrike';
import { StrikeGroupPage } from '../pages/strikegroup/strikegroup';
import { ServicesPage } from '../pages/services/services';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StrikesComponent } from '../components/strikes/strikes';
import { LogInPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { DatabaseProvider } from '../providers/databaseserver/databaseserver';
import { HttpModule } from "@angular/http";


export const firebaseConfig = {
  apiKey: "AIzaSyCQKyGrADrwvWaXsBBqCqcx8DEbrtjhmoA",
  //authDomain: "angularfire2-list-example.firebaseapp.com",
  databaseURL: "https://strike-43aa1.firebaseio.com/",
  //storageBucket: "",
  //messagingSenderId: "609067141823"
};


@NgModule({
  declarations: [
    MyApp,
    StrikeListPage,
    StrikePage,
    HomePage,
    SettingsPage,
    TabsPage,
    SendPage,
    ServicesPage,
    LogInPage,
    WallPage,
    ProfilePage,
    StrikeGroupPage,
    NewStrikePage,
    StrikesComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StrikeListPage,
    StrikePage,
    HomePage,
    ServicesPage,
    SendPage,
    WallPage,
    ProfilePage,
    SettingsPage,
    LogInPage,
    TabsPage,
    StrikeGroupPage,
    NewStrikePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}



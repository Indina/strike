import { Component } from '@angular/core';

import { StrikeListPage } from '../strikeList/strikeList';
import { StrikePage } from '../strike/strike';
import { HomePage } from '../home/home';
import { SendPage } from '../send/send';
import { StrikeGroupPage } from '../strikegroup/strikegroup';
import { WallPage } from '../wall/wall';
import { NewStrikePage } from '../newstrike/newstrike';
import {LogInPage} from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
 
  tab2Root = StrikeListPage;
  tab3Root = StrikePage;
  tab4Root = SendPage;
  tab5Root = StrikeGroupPage;
  tab6Root = WallPage;
  tab7Root = NewStrikePage;
   tab8Root = LogInPage;

  constructor() {

  }
}

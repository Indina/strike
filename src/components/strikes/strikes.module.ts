import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrikesComponent } from './strikes';

@NgModule({
  declarations: [
    StrikesComponent,
  ],
  imports: [
    IonicPageModule.forChild(StrikesComponent),
  ],
  exports: [
    StrikesComponent
  ]
})
export class StrikesComponentModule {}

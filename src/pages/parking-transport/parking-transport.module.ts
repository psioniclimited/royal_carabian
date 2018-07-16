import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkingTransportPage } from './parking-transport';

@NgModule({
  declarations: [
    ParkingTransportPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkingTransportPage),
  ],
})
export class ParkingTransportPageModule {}

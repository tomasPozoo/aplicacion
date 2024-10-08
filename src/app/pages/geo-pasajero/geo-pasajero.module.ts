import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoPasajeroPageRoutingModule } from './geo-pasajero-routing.module';

import { GeoPasajeroPage } from './geo-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoPasajeroPageRoutingModule
  ],
  declarations: [GeoPasajeroPage]
})
export class GeoPasajeroPageModule {}

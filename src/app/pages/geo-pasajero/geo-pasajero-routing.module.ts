import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoPasajeroPage } from './geo-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: GeoPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoPasajeroPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'olvide',
    loadChildren: () => import('./pages/olvide/olvide.module').then( m => m.OlvidePageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./pages/geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'anime',
    loadChildren: () => import('./pages/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'geo-pasajero',
    loadChildren: () => import('./pages/geo-pasajero/geo-pasajero.module').then( m => m.GeoPasajeroPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

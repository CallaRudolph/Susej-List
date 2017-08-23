import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalsComponent } from './personals/personals.component';
// import { PlayerDetailComponent } from './player-detail/player-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PersonalsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
// import { PlayerDetailComponent } from './player-detail/player-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PersonalComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

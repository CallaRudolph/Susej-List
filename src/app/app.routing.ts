import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { PersonalComponent } from './personal/personal.component';
// import { PlayerDetailComponent } from './player-detail/player-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'personals/:id',
    component: PersonalDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

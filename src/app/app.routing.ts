import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';

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
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'for-sale/:id',
    component: ForSaleDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

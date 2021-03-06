import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'menu',
      component: FoodMenuComponent,
    },
    {
      path: 'cart',
      component: CartComponent,
    },
    {
      path: 'item/:id',
      component: FoodDetailComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

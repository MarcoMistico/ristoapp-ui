import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbToggleModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    FormsModule,
    DashboardModule,
    NbCardModule,
    NbToggleModule,
    NbListModule,
    NbIconModule,
    NbButtonModule
  ],
  declarations: [
    PagesComponent,
    FoodMenuComponent,
    FoodDetailComponent,
    CartComponent
  ],
})
export class PagesModule {
}

import { NgModule } from '@angular/core';
import { NbAccordionModule, NbBadgeModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbStepperModule, NbToggleModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FoodDetailPopupComponent } from './food-menu/food-detail-popup/food-detail-popup.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    FormsModule,
    NbStepperModule,
    NbCheckboxModule,
    DashboardModule,
    NbCardModule,
    NbToggleModule,
    NbListModule,
    NbBadgeModule,
    NbAccordionModule,
    NbIconModule,
    NbButtonModule
  ],
  declarations: [
    PagesComponent,
    FoodMenuComponent,
    FoodDetailComponent,
    FoodDetailPopupComponent,
    CartComponent
  ],
})
export class PagesModule {
}

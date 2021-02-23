import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FoodMenuComponent } from './food-menu/food-menu.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    DashboardModule,
    NbCardModule,
    NbButtonModule
  ],
  declarations: [
    PagesComponent,
    FoodMenuComponent
  ],
})
export class PagesModule {
}

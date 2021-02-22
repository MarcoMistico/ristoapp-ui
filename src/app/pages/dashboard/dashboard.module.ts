import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { GetPositionComponent } from './get-position/get-position.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    GetPositionComponent,
  ],
})
export class DashboardModule { }

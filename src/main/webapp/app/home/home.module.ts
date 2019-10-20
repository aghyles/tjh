import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { T02JhSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [T02JhSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class T02JhHomeModule {}

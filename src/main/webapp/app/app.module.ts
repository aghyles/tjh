import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { T02JhSharedModule } from 'app/shared/shared.module';
import { T02JhCoreModule } from 'app/core/core.module';
import { T02JhAppRoutingModule } from './app-routing.module';
import { T02JhHomeModule } from './home/home.module';
import { T02JhEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    T02JhSharedModule,
    T02JhCoreModule,
    T02JhHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    T02JhEntityModule,
    T02JhAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class T02JhAppModule {}

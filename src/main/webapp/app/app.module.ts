import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterAngularSharedModule } from 'app/shared/shared.module';
import { JhipsterAngularCoreModule } from 'app/core/core.module';
import { JhipsterAngularAppRoutingModule } from './app-routing.module';
import { JhipsterAngularHomeModule } from './home/home.module';
import { JhipsterAngularEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterAngularSharedModule,
    JhipsterAngularCoreModule,
    JhipsterAngularHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterAngularEntityModule,
    JhipsterAngularAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterAngularAppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeftNavComponent} from '@layout/dashboard/left-nav/left-nav.component';
import {FooterComponent} from '@layout/dashboard/footer/footer.component';
import {HeaderComponent} from '@layout/dashboard/header/header.component';
import {LeftNavMenuComponent} from '@layout/dashboard/left-nav/left-nav-menu/left-nav-menu.component';
import {SkeletonComponent} from '@layout/dashboard/skeleton/skeleton.component';
import {SharedModule} from '@shared/shared.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AuthenticationService} from '@data/services/api/auth/authentication.service';
import {AdminService} from '@data/services/api/admin/admin.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '@core/interceptors/auth.interceptor';
import {AuthenticationGuard} from '@core/guards/authentication.guard';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    FooterComponent,
    HeaderComponent,
    LeftNavMenuComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    AdminService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

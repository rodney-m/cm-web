import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor, JwtInterceptor, UiLoader } from '@christ-embassy/core';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(UiLoader.load()),
    NgxUiLoaderHttpModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    httpInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}

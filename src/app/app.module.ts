import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentUsingSharedService1Component } from './component-using-shared-service1/component-using-shared-service1.component';
import { ComponentUsingSharedService2Component } from './component-using-shared-service2/component-using-shared-service2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentUsingSharedService1Component,
    ComponentUsingSharedService2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

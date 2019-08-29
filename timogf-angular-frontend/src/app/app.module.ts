import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './_components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './_components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

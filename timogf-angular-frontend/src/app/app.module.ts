import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './_components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './_components/banner/banner.component';
import { FormComponent } from './_components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

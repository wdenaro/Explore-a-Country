import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CountryChooserComponent } from './country-chooser/country-chooser.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { ShortCountryGetter } from './short-country-getter.service';
import { FullCountryGetter } from './full-country-getter.service';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CountryChooserComponent,
    CountryDetailComponent
  ],
  providers: [
    ShortCountryGetter,
    FullCountryGetter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

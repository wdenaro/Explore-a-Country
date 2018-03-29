import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShortCountryGetter } from './short-country-getter.service';
import { FullCountryGetter } from './full-country-getter.service';

import { CountryChooserComponent } from './country-chooser/country-chooser.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

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

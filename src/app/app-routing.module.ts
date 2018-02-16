import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryChooserComponent } from './country-chooser/country-chooser.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/choose', pathMatch: 'full' },
  { path: 'choose', component: CountryChooserComponent },
  { path: 'choose/:alpha', component: CountryChooserComponent },
  { path: 'country/:alpha', component: CountryDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

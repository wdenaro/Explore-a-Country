import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ShortCountry } from '../short-country';
import { ShortCountryGetter } from '../short-country-getter.service';

@Component({
  selector: 'app-country-chooser',
  templateUrl: './country-chooser.component.html',
  styleUrls: ['./country-chooser.component.scss']
})
export class CountryChooserComponent implements OnInit {

  countries: ShortCountry;
  event = true;
  countryCode = false;
  alpha = this.route.snapshot.paramMap.get('alpha');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shortCountryGetter: ShortCountryGetter,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCountryInfo();
  }

  getCountryInfo(): void {
    this.shortCountryGetter.getCountryInfo()
      .subscribe(shortCountry => this.countries = shortCountry);
  }

	onSelect(event): void {
		this.event = event;
    this.countryCode = event.target.value;
    this.router.navigate(['country/' +this.countryCode]);
	}


}

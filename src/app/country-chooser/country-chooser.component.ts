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

  public countries: ShortCountry;
  public alpha: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shortCountryGetter: ShortCountryGetter,
    private location: Location
  ) {}

  ngOnInit() {
    this.alpha = this.route.snapshot.paramMap.get('alpha');
    this.shortCountryGetter.getCountryInfo()
      .subscribe(shortCountry => this.countries = shortCountry);
  }

  onSelect(event): void {
    this.router.navigate(['country/' + event.target.value]);
  }


}

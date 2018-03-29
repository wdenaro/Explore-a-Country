import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { FullCountry } from '../full-country';
import { FullCountryGetter } from '../full-country-getter.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  public fullCountry: FullCountry;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fullCountryGetter: FullCountryGetter,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const alpha = this.route.snapshot.paramMap.get('alpha');
      this.fullCountryGetter.getCountryInfo(alpha)
        .subscribe(fullCountry => this.fullCountry = fullCountry);
    });
  }

}

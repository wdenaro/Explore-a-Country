import { TestBed, inject } from '@angular/core/testing';

import { ShortCountryGetterService } from './short-country-getter.service';

describe('ShortCountryGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortCountryGetterService]
    });
  });

  it('should be created', inject([ShortCountryGetterService], (service: ShortCountryGetterService) => {
    expect(service).toBeTruthy();
  }));
});

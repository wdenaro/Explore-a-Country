import { TestBed, inject } from '@angular/core/testing';

import { FullCountryGetterService } from './full-country-getter.service';

describe('FullCountryGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullCountryGetterService]
    });
  });

  it('should be created', inject([FullCountryGetterService], (service: FullCountryGetterService) => {
    expect(service).toBeTruthy();
  }));
});

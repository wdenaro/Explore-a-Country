import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChooserComponent } from './country-chooser.component';

describe('CountryChooserComponent', () => {
  let component: CountryChooserComponent;
  let fixture: ComponentFixture<CountryChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

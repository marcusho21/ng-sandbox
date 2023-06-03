import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsAutocompleteComponent } from './google-maps-autocomplete.component';

describe('GoogleMapsAutocompleteComponent', () => {
  let component: GoogleMapsAutocompleteComponent;
  let fixture: ComponentFixture<GoogleMapsAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GoogleMapsAutocompleteComponent],
    });
    fixture = TestBed.createComponent(GoogleMapsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

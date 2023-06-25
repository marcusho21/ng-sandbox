import { TestBed } from '@angular/core/testing';

import { GooglePlacesAutocompleteService } from './google-places-autocomplete.service';

describe('GooglePlacesAutocompleteService', () => {
  let service: GooglePlacesAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglePlacesAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

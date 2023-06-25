import { Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps.component';
import { GooglePlacesAutocompleteService } from './data-access/google-places-autocomplete.service';

export const GOOGLE_MAPS_ROUTES: Routes = [
  {
    path: '',
    component: GoogleMapsComponent,
    providers: [GooglePlacesAutocompleteService],
  },
];

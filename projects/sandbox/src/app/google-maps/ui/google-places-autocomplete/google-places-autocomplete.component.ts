import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sbx-google-places-autocomplete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-places-autocomplete.component.html',
  styleUrls: ['./google-places-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GooglePlacesAutocompleteComponent {}

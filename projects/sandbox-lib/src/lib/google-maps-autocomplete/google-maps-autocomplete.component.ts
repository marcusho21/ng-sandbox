import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'sbx-lib-google-maps-autocomplete',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatAutocompleteModule],
  templateUrl: './google-maps-autocomplete.component.html',
  styleUrls: ['./google-maps-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsAutocompleteComponent {
  options = ['One', 'Two', 'Three'];
}

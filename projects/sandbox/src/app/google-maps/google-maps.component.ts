import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsAutocompleteComponent } from 'sandbox-lib';

@Component({
  selector: 'sbx-google-maps',
  standalone: true,
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, GoogleMapsAutocompleteComponent],
})
export class GoogleMapsComponent {}

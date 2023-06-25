import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AutocompleteComponent } from '../shared/ui/components/autocomplete/autocomplete.component';

@Component({
  selector: 'sbx-google-maps',
  standalone: true,
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AutocompleteComponent],
})
export class GoogleMapsComponent {}

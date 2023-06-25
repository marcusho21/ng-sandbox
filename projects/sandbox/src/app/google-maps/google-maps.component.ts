import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AutocompleteComponent } from '../shared/ui/components/autocomplete/autocomplete.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sbx-google-maps',
  standalone: true,
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AutocompleteComponent, RouterOutlet],
})
export class GoogleMapsComponent {}

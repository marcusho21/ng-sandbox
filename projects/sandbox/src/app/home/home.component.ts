import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsAutocompleteComponent } from 'sandbox-lib';

@Component({
  selector: 'sbx-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, GoogleMapsAutocompleteComponent],
})
export class HomeComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sbx-truncation',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './truncation.component.html',
  styleUrls: ['./truncation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruncationComponent {}

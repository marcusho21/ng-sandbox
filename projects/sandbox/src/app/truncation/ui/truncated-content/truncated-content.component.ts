import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sbx-truncated-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './truncated-content.component.html',
  styleUrls: ['./truncated-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruncatedContentComponent {}

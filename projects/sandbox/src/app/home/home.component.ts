import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LinkButtonComponent } from '../shared/ui/link-button/link-button.component';

@Component({
  selector: 'sbx-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SidenavComponent,
    ToolbarComponent,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    LinkButtonComponent,
  ],
})
export class HomeComponent {
  opened = signal(false);

  onMenuClicked() {
    this.opened.update((o) => !o);
  }

  onNavigate() {
    this.opened.update(() => false);
  }
}

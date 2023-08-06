import { Routes } from '@angular/router';
import { TruncationComponent } from './truncation.component';

export const TRUNCATION_ROUTES: Routes = [
  {
    path: '',
    component: TruncationComponent,
    children: [
      {
        path: 'truncated-content',
        loadComponent: () =>
          import('./ui/truncated-content/truncated-content.component').then(
            (m) => m.TruncatedContentComponent
          ),
      },
    ],
  },
];

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'google-maps',
        loadChildren: () =>
          import('./google-maps/google-maps.routes').then(
            (m) => m.GOOGLE_MAPS_ROUTES
          ),
      },
    ],
  },
];

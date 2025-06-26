import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full' 
  },
  {
    path: 'personajes',
    loadComponent: () =>
      import('./components/personajes/personajes.component').then(
        (m) => m.PersonajesComponent
      )
  },

  {
  path: 'episodios',
  loadComponent: () => import('./components/episodios/episodios.component').then(m => m.EpisodiosComponent)
}

 
];

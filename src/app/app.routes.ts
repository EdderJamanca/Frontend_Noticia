import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./modules/noticias/noticias.module').then(m=>m.NoticiasModule)
  },
  {
    path:"**",
    loadComponent:()=>import('./error/error.component')
  }

];



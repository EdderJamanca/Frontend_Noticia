import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Registrar',
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'Registrar',
        title:'Neva Noticia',
        loadComponent:()=>import('./pages/register/register.component')
      },
      {
        path:'Listar',
        loadComponent:()=>import('./pages/lista/lista.component')
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }

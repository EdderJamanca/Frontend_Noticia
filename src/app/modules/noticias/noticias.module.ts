import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { RouterOutlet } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    RouterOutlet
    // AppRoutingModule
  ]
})
export class NoticiasModule { }

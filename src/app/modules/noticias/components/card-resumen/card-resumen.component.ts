import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { articulo } from '../../models/Articulo.interfaces';
import { ArticuloComponent } from '../articulo/articulo.component';
import { MatDialog } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { CalificacionComponent } from '../calificacion/calificacion.component';
import { ApiLocalService } from '../../services/api-local.service';
// import { TruncatePipe } from './truncate.pipe';


@Component({
  selector: 'app-card-resumen',
  standalone: true,
  imports: [CommonModule,CalificacionComponent],
  templateUrl: './card-resumen.component.html',
  styleUrl: './card-resumen.component.scss'
})
export class CardResumenComponent {

  @Input() arti!:articulo;
  @Output() emitIdArticulo =new EventEmitter();

  apilocalservice=inject(ApiLocalService);

  constructor(public dialog: MatDialog) {}

  OnShowModal(dato:articulo){

    const newDato={
        "author":dato.Nom_Autor,
        "title":dato.Titulo,
        "description":dato.Resumen,
        "urlToImage":dato.Img,
        "content":dato.Contenido,
        "clsificacio":dato.Calificacion
    }

    let dialogArticulo=this.dialog.open(ArticuloComponent,{
      maxWidth:'600px',
      data:newDato
    })
  }

  OnDelete(idNoticia:number){

    this.emitIdArticulo.emit(idNoticia);

  }



}


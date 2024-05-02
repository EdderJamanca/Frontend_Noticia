import { Component, inject, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FromModalComponent } from '../from-modal/from-modal.component';
// import { CalificacionComponent } from '../calificacion/calificacion.component';
import { ArticuloComponent } from '../articulo/articulo.component';
import { Article } from '../../models/NewApi.interfaces';
import { Categorias } from '../../models/Categoria.Interfaces';
import { ApiLocalService } from '../../services/api-local.service';
import Swal from 'sweetalert2'

// import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import {DialogModule} from '@angular/cdk/dialog';
// import {DialogModule} from '@angular/cdk/dialog';
@Component({
  selector: 'app-card-articulo',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './card-articulo.component.html',
  styleUrl: './card-articulo.component.scss'
})
export class CardArticuloComponent {

  @Input() articulo!:Article;
  @Input() arrayCategoria:Categorias[]=[];


  apilocalservice=inject(ApiLocalService);

  ngOnInit(): void {
    // console.log('sddsdssd',this.articulo);
  }

  constructor(public dialog: MatDialog) {}

 openDialog(articulo:Article){

    // console.log("this.arrayCategoria 010",this.arrayCategoria);
    const {publishedAt,url,source,...dato}=articulo;

    let openModal=this.dialog.open(FromModalComponent,{
      minWidth:'300px',
      disableClose: true,
      data:{
        arrayCategoria:this.arrayCategoria
      }
    });

    openModal.afterClosed().subscribe(result => {
      console.log('console dato',result);

      if(result.data==null) return;

      console.log('console dato 2',result);

       let {idcategoria,calificacion}=result.data;

       this.registrarArticulo(dato,idcategoria,calificacion);
    });
 }

 registrarArticulo(dato:any,idcategoria:string,calificacion:number){

  const body={
    CategoriaId:idcategoria,
    Titulo:dato.title,
    Resumen:dato.description,
    Img:dato.urlToImage,
    Contenido:dato.content,
    Calificacion:calificacion,
    Nom_Autor:dato.author
  };

    this.apilocalservice.registrarArticulo(body)
        .subscribe(
          resp=>{

            Swal.fire({
              position: "center",
              icon: "success",
              title: resp.message,
              showConfirmButton: false,
              timer: 2500
            });
          },
          error=>{
            throw new Error("error al registrar CardArticuloComponent");
          }
        )
 }


 verArticulo(articulo:Article){
    let dialogArticulo=this.dialog.open(ArticuloComponent,{
      maxWidth:'600px',
      data:articulo
    })
 }

}

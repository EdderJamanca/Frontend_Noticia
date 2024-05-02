import { Component, Inject } from '@angular/core';
import { DIALOG_DATA} from '@angular/cdk/dialog';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CalificacionComponent } from '../calificacion/calificacion.component';
import { Categorias } from '../../models/Categoria.Interfaces';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-from-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    CalificacionComponent,
    ReactiveFormsModule
  ],
  templateUrl: './from-modal.component.html',
  styleUrl: './from-modal.component.scss'
})
export class FromModalComponent {

  constructor(
    public dialogRef: MatDialogRef<FromModalComponent>,
    @Inject(DIALOG_DATA) public data: any
  ) {}

  arrayCategoria:Categorias[]=[];
  calificacion:number=0;
  ngOnInit(): void {

    this.arrayCategoria=this.data.arrayCategoria;
    this.idCategoriaCtrol.patchValue(this.data.arrayCategoria[0].idcategoria);

  }

  idCategoriaCtrol=new FormControl();


  onSave(){

    let idcategoria=this.idCategoriaCtrol.value;

    this.dialogRef.close({data:{idcategoria,calificacion:this.calificacion}});
  }


  OnClose(){ this.dialogRef.close({data:null})}

  OnEmitCalificacion(event:number){
    console.log("evento",event);
    this.calificacion=event;
  }
}

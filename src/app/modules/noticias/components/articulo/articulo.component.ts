import { Component, Inject, Input } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { CalificacionComponent } from '../calificacion/calificacion.component';
import { DIALOG_DATA} from '@angular/cdk/dialog';
import { Article } from '../../models/NewApi.interfaces';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    CalificacionComponent
  ],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent {

  @Input() showCalificacion:boolean=false

   articulo!:Article;
  constructor(
    public dialogRef: MatDialogRef<ArticuloComponent>,
    @Inject(DIALOG_DATA) public data: Article)
  {}

  ngOnInit(): void {
    this.articulo=this.data;
  }


  closeArticulo(){
    this.dialogRef.close();
  }

}

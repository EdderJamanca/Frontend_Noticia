import { Component, inject } from '@angular/core';
import { CardArticuloComponent } from '../../components/card-articulo/card-articulo.component';
import { PaginacionComponent } from '../../components/paginacion/paginacion.component';
import { NewApiService } from '../../services/new-api.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article, RptNewAPI } from '../../models/NewApi.interfaces';
import { ApiLocalService } from '../../services/api-local.service';
import { Categorias } from '../../models/Categoria.Interfaces';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardArticuloComponent,
    PaginacionComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {

  private newApi=inject(NewApiService);
  private apiLocal=inject(ApiLocalService);

  jsonArticulos:RptNewAPI|null=null;
  arrayArticulo:Article[]=[];
  arrayCategoria:Categorias[]=[];

  totalRegistro:number=0;


  palabraClaveCtrol=new FormControl(null,{
    nonNullable:true,
      validators:[
        Validators.required,
        Validators.minLength(3)
      ]
    }
  )

ngOnInit(): void {
  this.apiLocal.listaCategoria().subscribe(arr=>{
    this.arrayCategoria=arr.data;
  })
}

OnClickBuscar(){

   let palabraClave=this.palabraClaveCtrol.value || '';

   if(this.palabraClaveCtrol.invalid && this.palabraClaveCtrol.touched){
      return;
   }


    this.newApi.getNoticias(palabraClave)
    .subscribe(
      resp=>{
          if(this.ObjectEstaVacio(resp) && typeof resp=='object') {return}

           const {totalResults,articles}=resp;
          this.totalRegistro=totalResults;
          this.arrayArticulo=articles;

          this.palabraClaveCtrol.reset();

        },
        error=>{ throw "Error al Obtener los articulos de New Api"}
      )

}

  ObjectEstaVacio(obj:any){
    return Object.keys(obj).length==0;
  }


}

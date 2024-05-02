import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  RPTCategorias, RptRegistro } from '../models/Categoria.Interfaces';
import { RptArticulos } from '../models/Articulo.interfaces';

const apiurl=environment.urlapi;
@Injectable({
  providedIn: 'root'
})
export class ApiLocalService {

  constructor() { }

  http=inject(HttpClient);

  listaCategoria():Observable<RPTCategorias>
  {
      const url=`${apiurl}/api/categoria/listado`;

      return this.http.get<RPTCategorias>(url);
  }

  registrarArticulo(body:any):Observable<RptRegistro>
  {
     const url=`${apiurl}/api/noticia/registrar`;

     return this.http.post<RptRegistro>(url,body);
  }

  listarArticulos(idcategoria:string,calificacion:number):Observable<RptArticulos>
  {
    const url=`${apiurl}/api/noticia/listnoticia?idcategoria=${idcategoria}&calificacion=${calificacion}`;
    return this.http.get<RptArticulos>(url);

  }

  eliminarArticulo(idarticulo:number):Observable<any>
  {
    const url=`${apiurl}/api/noticia/eliminar/${idarticulo}`;
    return this.http.delete<any>(url);
  }

}

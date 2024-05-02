import { Component, inject } from '@angular/core';
// import { CalidicacionComponent } from '../../components/calidicacion/calidicacion.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardResumenComponent } from '../../components/card-resumen/card-resumen.component';
import { PaginacionComponent } from '../../components/paginacion/paginacion.component';
import { ApiLocalService } from '../../services/api-local.service';
import { articulo } from '../../models/Articulo.interfaces';
import Swal from 'sweetalert2'
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    SidebarComponent,
    CardResumenComponent,
    PaginacionComponent,
    CommonModule
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export default class ListaComponent {

  // lists=[1,2,3,4,5,6,7,8,9,10,11];

  listArticulo:articulo[]=[];
  listArticuloFilter:articulo[]=[];

  apiLocalservice=inject(ApiLocalService);
  sidebarservice=inject(SidebarService);




  openClose=this.sidebarservice.hideSidebar;

  ngOnInit(): void {
    this.obtenrArticulos('1',1);
  }

  emitCalifCate(dato:any){
    const {idcategorias,calificacion}=dato;
    this.obtenrArticulos(idcategorias,calificacion);

  }

    obtenrArticulos(idcategoria:string,calificacion:number){
        this.apiLocalservice.listarArticulos(idcategoria,calificacion)
            .subscribe(resp=>{
              this.listArticulo=resp.data;
            })
    }

    emitIdArticulo(idarticulo:number){
      this.apiLocalservice.eliminarArticulo(idarticulo)
      .subscribe(
        resp=>{
            // console.log('respuesta',resp);
            this.listArticulo= this.listArticulo.filter(item=>item.NoticiaId !=idarticulo);

            Swal.fire({
              position: "center",
              icon: "success",
              title: resp.message,
              showConfirmButton: false,
              timer: 2500
            });
        },
        error=>{
          throw Error("Error al eliminar articulo")
        })
    }

    dataEmit(data:any[]){

      this.listArticuloFilter=data;
    }


}

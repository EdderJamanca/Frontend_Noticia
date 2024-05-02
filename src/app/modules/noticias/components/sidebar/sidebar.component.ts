import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { CalificacionComponent } from '../calificacion/calificacion.component';
import { ApiLocalService } from '../../services/api-local.service';
// import { Categorias } from '../../models/Categoria.Interfaces';

 interface ListCategoria {
  idcategoria:   number;
  Nom_Categoria: string;
  ischeck:boolean
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CalificacionComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  apilocalservice=inject(ApiLocalService);

  Categorias=signal<ListCategoria[]>([]);
  @Output() emitCalifCate =new EventEmitter();

  valorCalificacion:number=1;

  ngOnInit(): void {

    this.apilocalservice.listaCategoria()
      .subscribe(resp=>{
        let newResp=resp.data.map((resp,i)=>{return {...resp,ischeck: i==0?true:false}});
        this.Categorias.set(newResp);
      })

  }

  OnChangeCheck(idcategoria:number){
    this.Categorias.update((datos)=>datos.map((categoria,index)=>this.upadateCategoria(categoria.idcategoria,idcategoria,categoria)));
    this.OnFilter();

  }


  upadateCategoria(id:number,idcategoria:number,data:ListCategoria){
    return {...data,ischeck:id==idcategoria? !data.ischeck :data.ischeck }
  }

  OnCalificar(id:number)
  {
    this.valorCalificacion=id;

    // console.log('datos signal',this.Categorias())
    this.OnFilter();
  }


  OnFilter(){
    let data=this.Categorias().filter(res=>res.ischeck==true);
    const idcategorias = data.map(obj => obj.idcategoria).join(',');
    // console.log("seleccionDato",idcategorias)
    this.emitCalifCate.emit({idcategorias,calificacion:this.valorCalificacion});
  }

}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calificacion.component.html',
  styleUrl: './calificacion.component.scss'
})
export class CalificacionComponent {

  @Output() addToCart =new EventEmitter();
  @Input() valorCalificar:number=0;

   ngOnInit(): void {
      this.OnClick(this.valorCalificar);

   }

  lisCalificacion=signal([
    {
      id:1,
      nomClass:{"cursor-pointer":true,"text-md":true,"text-gray-300":true, "fa-regular":true, "fa-star":true}
    },
    {
      id:2,
      nomClass:{"cursor-pointer":true,"text-md":true,"text-gray-300":true, "fa-regular":true, "fa-star":true}
    },
    {
      id:3,
      nomClass:{"cursor-pointer":true,"text-md":true,"text-gray-300":true, "fa-regular":true, "fa-star":true}
    },
    {
      id:4,
      nomClass:{"cursor-pointer":true,"text-md":true,"text-gray-300":true, "fa-regular":true, "fa-star":true}
    },
    {
      id:5,
      nomClass:{"cursor-pointer":true,"text-md":true,"text-gray-300":true, "fa-regular":true, "fa-star":true}
    }
  ]);



  OnClick(id:number)
  {
    this.lisCalificacion.update(items=>items.map(item=>this.modificarClase(id,item.id,item)))
    this.addToCart.emit(id)
  }

  modificarClase(id:number,index:number,data:any){
    let nuevaClase=id<index ? {"cursor-pointer":true,"text-md":true,"text-gray-300":true, "fa-regular":true, "fa-star":true} : {"cursor-pointer":true,"text-md":true,"text-indigo-600":true, "fa-solid":true, "fa-star":true};

    return {...data,nomClass:nuevaClase }
  }


}

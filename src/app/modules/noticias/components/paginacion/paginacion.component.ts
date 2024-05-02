import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.scss'
})
export class PaginacionComponent {

    ////// PAGINACION DEL LISTADO DE PRODUCTOS
    list:any[]=[];
    @Input() itemsPerPage: number = 5;
    @Input() currentPage: number = 1;
    @Input('list') set OnchangeList(dato:any[]){
       if(dato.length==0){return;}
       this.list=dato;
       this.paginatedList()
    };
    @Output() dataEmit =new EventEmitter();

    // ngOnInit()
    // {
    //   this.paginatedList()
    // }


    getPageNumbers(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    get totalPages(): number {
      return Math.ceil(this.list.length / this.itemsPerPage);
    }

    paginatedList() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.dataEmit.emit(this.list.slice(startIndex, endIndex));
    }

    prevPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
      }

      this.paginatedList();
    }

    goToPage(pagina: number | '...'): void {
      if (pagina !== '...') {
        // Ahora TypeScript sabe que 'pagina' es de tipo number aquí
        this.currentPage = pagina as number;
        // Resto de la lógica...
      }
      this.paginatedList();
    }

    nextPage(): void {
      const lastPage = Math.ceil(this.list.length / this.itemsPerPage);
      if (this.currentPage < lastPage) {
        this.currentPage++;
      }
      this.paginatedList();
    }

    getPageNumbersWithEllipsis(): (number | '...')[] {
      const totalPages = this.totalPages;
      const visiblePages = 4; // Puedes ajustar este número según tus preferencias
      const result: (number | '...')[] = [];

      if (totalPages <= visiblePages) {
        // Mostrar todas las páginas si hay pocas
        result.push(...this.getPageNumbers());
      } else {
        // Lógica para mostrar un rango específico con elipsis
        const start = Math.max(1, this.currentPage - Math.floor(visiblePages / 2));
        const end = Math.min(totalPages, start + visiblePages - 1);

        if (start > 1) {
          result.push(1, '...');
        }

        for (let i = start; i <= end; i++) {
          result.push(i);
        }

        if (end < totalPages) {
          result.push('...', totalPages);
        }
      }

      return result;
    }

}

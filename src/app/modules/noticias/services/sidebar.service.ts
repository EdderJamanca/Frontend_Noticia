import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  hideSidebar=signal(false);

  toogleSidebar(){
    this.hideSidebar.update(preStado=>!preStado);
  }

  constructor() { }
}

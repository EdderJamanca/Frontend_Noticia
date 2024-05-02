import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
            RouterOutlet,
            FooterComponent,
            NgTemplateOutlet],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}

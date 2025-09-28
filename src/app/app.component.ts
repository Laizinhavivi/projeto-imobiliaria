import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Imobiliária Prime';

  menu = [
    { title: 'Home', link: '/' },
    { title: 'Imóveis', link: '/imoveis' },
    { title: 'Meus Interesses', link: '/interesses' }
  ];
}

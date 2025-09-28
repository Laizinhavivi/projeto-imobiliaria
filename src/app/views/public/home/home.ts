// src/app/views/public/home/home.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardImovelComponent } from '../../../templates/components/card-imovel/card-imovel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CardImovelComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  imoveisDestaque = [
    { id: 1, nome: 'Apartamento no Centro', valor: 250000 },
    { id: 2, nome: 'Casa com Jardim', valor: 420000 },
    { id: 3, nome: 'Cobertura com Vista Mar', valor: 850000 },
    { id: 4, nome: 'Loft Moderno', valor: 310000 },
    { id: 5, nome: 'Casa de Campo', valor: 550000 },
    { id: 6, nome: 'Apartamento Studio', valor: 180000 },
    { id: 7, nome: 'Flat com Varanda', valor: 270000 },
    { id: 8, nome: 'Sobrado Clássico', valor: 480000 },
    { id: 9, nome: 'Casa com Piscina', valor: 750000 },
    { id: 10, nome: 'Apartamento Novo', valor: 320000 },
    { id: 11, nome: 'Cobertura Duplex', valor: 900000 },
    { id: 12, nome: 'Casa Geminada', valor: 400000 }
  ];
}

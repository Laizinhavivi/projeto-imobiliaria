import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca-imoveis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca-imoveis.html',
  styleUrls: ['./busca-imoveis.scss']
})
export class BuscaImoveisComponent {
  // Lista de imóveis de exemplo
  imoveis = [
    { id: 1, titulo: 'Apartamento Luxo', cidade: 'São Paulo', preco: 1200000 },
    { id: 2, titulo: 'Casa com Piscina', cidade: 'Rio de Janeiro', preco: 950000 },
    { id: 3, titulo: 'Kitnet Central', cidade: 'Belo Horizonte', preco: 250000 }
  ];
}

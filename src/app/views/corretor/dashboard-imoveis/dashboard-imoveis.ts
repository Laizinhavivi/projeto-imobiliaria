import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardImovelComponent } from '../../../templates/components/card-imovel/card-imovel';
import { FiltroImovelPipe } from '../../../templates/pipes/filtro-imovel-pipe';


interface Imovel {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  imagem: string;
}

@Component({
  selector: 'app-dashboard-imoveis',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CardImovelComponent, FiltroImovelPipe],
  templateUrl: './dashboard-imoveis.html',
  styleUrls: ['./dashboard-imoveis.scss']
})
export class DashboardImoveisComponent {
  searchText: string = '';

  imoveis: Imovel[] = [
    { id: 1, titulo: 'Apartamento Luxo', descricao: '3 quartos, 2 banheiros, 1 vaga', preco: 500000, imagem: '/assets/img1.jpg' },
    { id: 2, titulo: 'Casa Espaçosa', descricao: '4 quartos, piscina, churrasqueira', preco: 750000, imagem: '/assets/img2.jpg' },
    { id: 3, titulo: 'Studio Moderno', descricao: '1 quarto, 1 banheiro, próximo ao centro', preco: 250000, imagem: '/assets/img3.jpg' }
  ];

  deleteImovel(id: number) {
    this.imoveis = this.imoveis.filter(imovel => imovel.id !== id);
  }
}

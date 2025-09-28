import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardImovelComponent } from '../../../templates/components/card-imovel/card-imovel';
import { FiltroImovelPipe } from '../../../templates/pipes/filtro-imovel-pipe';

@Component({
  selector: 'app-busca-imoveis',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CardImovelComponent, FiltroImovelPipe],
  templateUrl: './busca-imoveis.html',
  styleUrls: ['./busca-imoveis.scss']
})
export class BuscaImoveisComponent {
  searchText: string = '';
  imoveis = [
    { id: 1, titulo: 'Apartamento no Centro', preco: 250000 },
    { id: 2, titulo: 'Casa com Jardim', preco: 420000 },
  ];
}

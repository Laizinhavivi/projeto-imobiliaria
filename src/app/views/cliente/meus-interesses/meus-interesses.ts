import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardImovelComponent } from '../../../templates/components/card-imovel/card-imovel';
import { FiltroImovelPipe } from '../../../templates/pipes/filtro-imovel-pipe';

@Component({
  selector: 'app-meus-interesses',
  standalone: true,
  imports: [CommonModule, FormsModule, CardImovelComponent, FiltroImovelPipe],
  templateUrl: './meus-interesses.html',
  styleUrls: ['./meus-interesses.scss']
})
export class MeusInteressesComponent {
  searchText: string = '';
  meusInteresses = [
    { id: 1, titulo: 'Apartamento Centro', descricao: '3 quartos, 2 banheiros', preco: 350000 },
    { id: 2, titulo: 'Casa Jardim', descricao: '4 quartos, piscina', preco: 550000 }
  ];

  removerInteresse(id: number) {
    this.meusInteresses = this.meusInteresses.filter(imovel => imovel.id !== id);
  }
}

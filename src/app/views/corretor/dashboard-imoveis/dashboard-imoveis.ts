import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardImovelComponent } from '../../../templates/components/card-imovel/card-imovel';
import { FiltroImovelPipe } from '../../../templates/pipes/filtro-imovel-pipe';

@Component({
  selector: 'app-dashboard-imoveis',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CardImovelComponent, FiltroImovelPipe],
  templateUrl: './dashboard-imoveis.html'
})
export class DashboardImoveisComponent {
  searchText = '';
  imoveis = [
    { id: 1, nome: 'Apartamento A', valor: 250000 },
    { id: 2, nome: 'Casa B', valor: 450000 }
  ];

  deleteImovel(id: number) {
    this.imoveis = this.imoveis.filter(imovel => imovel.id !== id);
  }
}

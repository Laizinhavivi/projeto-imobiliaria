import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-imovel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>{{ imovel.nome }}</h2>
      <p>Valor: {{ imovel.valor | currency:'BRL' }}</p>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
    }
  `]
})
export class CardImovelComponent {
  @Input() imovel!: { id: number; nome: string; valor: number };
}

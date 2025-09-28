import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-imovel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhes-imovel.html',
  styleUrls: ['./detalhes-imovel.scss']
})
export class DetalhesImovelComponent {
  imovel: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    // Aqui você pode buscar os detalhes do imóvel via serviço, por enquanto é mock
    this.imovel = { id, titulo: 'Exemplo de imóvel', preco: 300000 };
  }
}

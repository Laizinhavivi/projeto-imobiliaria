import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-imovel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-imovel.html',
  styleUrls: ['./card-imovel.scss']
})
export class CardImovelComponent {
  @Input() imovel: any;
}

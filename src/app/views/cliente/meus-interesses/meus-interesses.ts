import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interesses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Meus Interesses</h2>
    <p>Imóveis que você marcou como interesse.</p>
  `
})
export class InteressesComponent {}

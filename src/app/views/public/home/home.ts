import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Home</h2>
    <p>Bem-vindo à Imobiliária Prime!</p>
  `
})
export class HomeComponent {}

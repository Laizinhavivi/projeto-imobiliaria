import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imovel } from '../models/imovel.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteressesService {
  getInteressesByUser(userId: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000'; // URL do JSON Server

  constructor(private http: HttpClient) { }

  // Retorna os imóveis de interesse de um cliente
  getInteressesByCliente(clienteId: number): Observable<Imovel[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interesses?clienteId=${clienteId}`)
      .pipe(
        map(interesses => interesses.map(i => this.getImovelById(i.imovelId)))
      );
  }

  // Retorna um único imóvel pelo ID
  private getImovelById(imovelId: number): Imovel {
    // Para simplificar, aqui você pode buscar no JSON Server
    // ou armazenar uma lista local de imóveis
    return { id: imovelId, titulo: 'Exemplo', descricao: '', preco: 100000, corretorId: 1, destaque: true, tipo: 'Apartamento', cidade: 'Santos', imagemUrl: '' };
  }
}

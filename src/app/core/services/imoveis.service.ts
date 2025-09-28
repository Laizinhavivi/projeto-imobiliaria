import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {
  private apiUrl = 'http://localhost:3000/imoveis';

  constructor(private http: HttpClient) {}

  // Todos os imóveis
  getImoveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(this.apiUrl);
  }

  // Imóvel por ID
  getImovelById(id: number): Observable<Imovel> {
    return this.http.get<Imovel>(`${this.apiUrl}/${id}`);
  }

  // Criar imóvel
  createImovel(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>(this.apiUrl, imovel);
  }

  // Atualizar imóvel
  updateImovel(id: number, imovel: Imovel): Observable<Imovel> {
    return this.http.put<Imovel>(`${this.apiUrl}/${id}`, imovel);
  }

  // Deletar imóvel
  deleteImovel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Imóveis de destaque
  getImoveisDestaque(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(`${this.apiUrl}?destaque=true`);
  }

  // Imóveis de um corretor específico
  getImoveisByCorretor(corretorId: number): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(`${this.apiUrl}?corretorId=${corretorId}`);
  }
}

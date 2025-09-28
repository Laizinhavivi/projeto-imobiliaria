import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImovel',
  standalone: true
})
export class FiltroImovelPipe implements PipeTransform {
  transform(imoveis: any[], searchText: string): any[] {
    if (!imoveis) return [];
    if (!searchText) return imoveis;
    searchText = searchText.toLowerCase();
    return imoveis.filter(imovel => 
      imovel.titulo.toLowerCase().includes(searchText) ||
      imovel.descricao.toLowerCase().includes(searchText)
    );
  }
}

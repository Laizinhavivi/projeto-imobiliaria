import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImovel',
  standalone: true
})
export class FiltroImovelPipe implements PipeTransform {
  transform(imoveis: any[], searchText: string): any[] {
    if (!imoveis || !searchText) return imoveis;

    return imoveis.filter(imovel =>
      imovel.nome.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

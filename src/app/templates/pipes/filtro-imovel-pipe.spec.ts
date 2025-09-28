import { Imovel } from "../../core/models/imovel.model";
import { FiltroImovelPipe } from "./filtro-imovel-pipe";

describe('FiltroImovelPipe', () => {
  const pipe = new FiltroImovelPipe();

  const imoveis: Imovel[] = [
    { id: 1, titulo: 'Apartamento Vista Mar', tipo: 'Apartamento', cidade: 'Santos', preco: 500000, descricao: '', corretorId: 1, destaque: true, imagemUrl: '' },
    { id: 2, titulo: 'Casa Jardim', tipo: 'Casa', cidade: 'São Paulo', preco: 750000, descricao: '', corretorId: 1, destaque: false, imagemUrl: '' },
    { id: 3, titulo: 'Cobertura Luxo', tipo: 'Cobertura', cidade: 'Santos', preco: 1200000, descricao: '', corretorId: 2, destaque: true, imagemUrl: '' }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter by title', () => {
    const result = pipe.transform(imoveis, 'Apartamento');
    expect(result.length).toBe(1);
    expect(result[0].titulo).toBe('Apartamento Vista Mar');
  });

  it('should filter by city', () => {
    const result = pipe.transform(imoveis, 'Santos');
    expect(result.length).toBe(2);
  });

  it('should filter by type', () => {
    const result = pipe.transform(imoveis, 'Casa');
    expect(result.length).toBe(1);
    expect(result[0].tipo).toBe('Casa');
  });

  it('should return all if searchText is empty', () => {
    const result = pipe.transform(imoveis, '');
    expect(result.length).toBe(3);
  });

});

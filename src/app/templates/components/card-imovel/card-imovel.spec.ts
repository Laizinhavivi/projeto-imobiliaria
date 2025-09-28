import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardImovel } from './card-imovel';
import { Imovel } from '../../../core/models/imovel.model';

describe('CardImovel', () => {
  let component: CardImovel;
  let fixture: ComponentFixture<CardImovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardImovel]
    }).compileComponents();

    fixture = TestBed.createComponent(CardImovel);
    component = fixture.componentInstance;
    component.imovel = {
      id: 1,
      titulo: 'Apartamento Teste',
      descricao: 'Descrição teste',
      preco: 100000,
      corretorId: 1,
      destaque: true
    } as Imovel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display imovel data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Apartamento Teste');
    expect(compiled.textContent).toContain('Descrição teste');
  });
});
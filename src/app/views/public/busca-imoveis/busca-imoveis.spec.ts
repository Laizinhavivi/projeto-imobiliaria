import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaImoveisComponent } from './busca-imoveis';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ImoveisService } from '../../../core/services/imoveis.service';

describe('BuscaImoveisComponent', () => {
  let component: BuscaImoveisComponent;
  let fixture: ComponentFixture<BuscaImoveisComponent>;

  const imoveisServiceStub = {
    getAllImoveis: () => of([])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaImoveisComponent],
      providers: [
        { provide: ImoveisService, useValue: imoveisServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA] // ignora app-card-imovel
    }).compileComponents();

    fixture = TestBed.createComponent(BuscaImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty imoveis initially', () => {
    expect(component.imoveis.length).toBe(0);
  });
});

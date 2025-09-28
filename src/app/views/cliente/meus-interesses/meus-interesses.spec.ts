import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusInteressesComponent } from './meus-interesses';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

describe('MeusInteressesComponent', () => {
  let component: MeusInteressesComponent;
  let fixture: ComponentFixture<MeusInteressesComponent>;

  const interessesServiceStub = {
    getInteressesByCliente: (id: number) => of([])
  };

  const authServiceStub = {
    getUser: () => ({ id: 2, tipo: 'cliente' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeusInteressesComponent],
      providers: [
        { provide: interessesServiceStub, useValue: interessesServiceStub },
        { provide: AuthService, useValue: authServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA] // ignora app-card-imovel
    }).compileComponents();

    fixture = TestBed.createComponent(MeusInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty interests initially', () => {
    expect(component.interesses.length).toBe(0);
  });
});

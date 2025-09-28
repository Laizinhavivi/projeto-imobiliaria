import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardImoveisComponent } from './dashboard-imoveis';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ImoveisService } from '../../../core/services/imoveis.service';
import { AuthService } from '../../../core/services/auth.service';

describe('DashboardImoveisComponent', () => {
  let component: DashboardImoveisComponent;
  let fixture: ComponentFixture<DashboardImoveisComponent>;

  const imoveisServiceStub = {
    getImoveisByCorretor: (id: number) => of([]),
    deleteImovel: (id: number) => of({})
  };

  const authServiceStub = {
    getUser: () => ({ id: 1, tipo: 'corretor' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardImoveisComponent],
      providers: [
        { provide: ImoveisService, useValue: imoveisServiceStub },
        { provide: AuthService, useValue: authServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA] // ignora app-card-imovel
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardImoveisComponent);
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

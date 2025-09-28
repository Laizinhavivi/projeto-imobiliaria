import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ImoveisService } from '../../../core/services/imoveis.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const imoveisServiceStub = {
    getAllImoveis: () => of([])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: ImoveisService, useValue: imoveisServiceStub }],
      schemas: [NO_ERRORS_SCHEMA] // ignora app-card-imovel
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty destaque initially', () => {
    expect(component.imoveisDestaque.length).toBe(0);
  });
});

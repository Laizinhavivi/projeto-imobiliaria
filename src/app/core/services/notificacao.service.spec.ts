import { TestBed } from '@angular/core/testing';
import { Notificacao } from './notificacao.service';

describe('Notificacao', () => {
  let service: Notificacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Notificacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a message (alert)', () => {
    spyOn(window, 'alert');
    service.show('Teste');
    expect(window.alert).toHaveBeenCalledWith('Teste');
  });
});
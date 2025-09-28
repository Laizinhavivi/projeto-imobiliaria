import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ImoveisService } from './imoveis.service';

describe('ImoveisService', () => {
  let service: ImoveisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImoveisService]
    });
    service = TestBed.inject(ImoveisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get imoveis', () => {
    const dummyImoveis = [{ id: 1, titulo: 'Teste' }];
    service.getImoveis().subscribe(imoveis => {
      expect(imoveis.length).toBe(1);
      expect(imoveis).toEqual(dummyImoveis);
    });
    const req = httpMock.expectOne('http://localhost:3000/imoveis');
    expect(req.request.method).toBe('GET');
    req.flush(dummyImoveis);
  });
});
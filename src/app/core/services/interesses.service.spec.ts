import { TestBed } from '@angular/core/testing';

import { Interesses } from './interesses.service';

describe('Interesses', () => {
  let service: Interesses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Interesses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

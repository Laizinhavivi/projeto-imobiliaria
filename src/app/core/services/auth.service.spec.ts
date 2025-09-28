import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and logout correctly', () => {
    service.login('corretor', 1);
    expect(service.isLoggedIn()).toBeTrue();
    expect(service.getPerfil()).toBe('corretor');
    expect(service.getUserId()).toBe(1);

    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
    expect(service.getPerfil()).toBeNull();
    expect(service.getUserId()).toBeNull();
  });
});
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CorretorGuard } from './corretor-guard';
import { AuthService } from '../services/auth.service';

describe('CorretorGuard', () => {
  let guard: CorretorGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn', 'getPerfil']);
    const routeSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        CorretorGuard,
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routeSpy }
      ]
    });

    guard = TestBed.inject(CorretorGuard);
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should allow access for authenticated corretor', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    authServiceSpy.getPerfil.and.returnValue('corretor');
    expect(guard.canActivate()).toBeTrue();
  });

  it('should redirect if not authenticated', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    authServiceSpy.getPerfil.and.returnValue('corretor');
    expect(guard.canActivate()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should redirect if authenticated but not corretor', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    authServiceSpy.getPerfil.and.returnValue('cliente');
    expect(guard.canActivate()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
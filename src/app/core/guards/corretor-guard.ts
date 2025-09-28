import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CorretorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUser();    
    if (this.authService.isLoggedIn() && user && user.tipo === 'corretor') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
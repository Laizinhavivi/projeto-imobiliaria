import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  tipo: 'cliente' | 'corretor';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private user: Usuario | null = null;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): Usuario | null {
    return this.user;
  }

  login(user: Usuario) {
    this.loggedIn = true;
    this.user = user;
  }

  logout() {
    this.loggedIn = false;
    this.user = null;
  }
}
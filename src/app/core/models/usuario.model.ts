// src/app/core/models/usuario.model.ts
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string; // Senha é opcional no front-end após o login
  tipo: 'cliente' | 'corretor';
}
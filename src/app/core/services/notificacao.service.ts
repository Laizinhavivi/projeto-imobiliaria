import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Notificacao {
  show(message: string) {
    alert(message); // Simples, pode trocar por snackbar/toast depois
  }
}
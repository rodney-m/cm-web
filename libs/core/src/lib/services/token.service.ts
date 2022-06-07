import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem('ce_token', token);
  }

  public getToken(): any {
    return localStorage.getItem('ce_token');
  }

  public clearToken() {
    localStorage.clear();
  }
}

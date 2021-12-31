import { Injectable } from '@angular/core';
import { Token } from './../interfaces/token.interface';

@Injectable()
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    const authenticated = this.getTokenInfo()?.authenticated;
    if(authenticated) {
      return true;
    }
    return false;
  }

  setTokenInfo(tokenInfo: Token): void {
    localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
  }

  getTokenInfo(): Token | null {
    const token = JSON.parse(localStorage.getItem('tokenInfo') as string) as Token;
    return token;
  }

  logout(): void {
    localStorage.removeItem('tokenInfo');
  }

}
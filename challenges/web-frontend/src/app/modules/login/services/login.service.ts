import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './../../../interfaces/token.interface';
import { environment } from './../../../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './../../../services/auth.service';
 
@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(userMailId: string, password: string): Observable<void> {
    const url = `${environment.baseUrl}/v1/authentication/${userMailId}`;

    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { password: password, meta: '' };
    
    return this.http.put<Token>(url, body, {
          headers:header,
          observe: 'response'
      })
      .pipe(
          map((res) => {
              this.authService.setTokenInfo(res?.body as Token);
          })
      );
  }
}

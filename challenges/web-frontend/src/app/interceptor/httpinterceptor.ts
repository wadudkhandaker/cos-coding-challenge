import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService?.getTokenInfo()?.token as string;
    const userId = this.authService?.getTokenInfo()?.userId as string;
    if (token) {
        request = request.clone({
            setHeaders: { 'authtoken': `${token}`, 'userid': ` ${userId}`}
        });
    }

    return next.handle(request);
  }
}
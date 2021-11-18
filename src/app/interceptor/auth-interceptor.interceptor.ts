import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector,
  ) {
  }

  intercept(requete: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthService);

    let tokenizedRep = requete.clone({
      setHeaders: {
        authorization: `Bearer ${ authService.getToken()}`
      }
    });

    return next.handle(tokenizedRep);
  }
}

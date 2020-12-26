import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '@data/services/api/auth/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
     if (httpRequest.url.includes( `${this.authenticationService.host}/usuario/login`) ) {
       return httpHandler.handle(httpRequest);
     }
     if (httpRequest.url.includes( `${this.authenticationService.host}/usuario/registrar`) ) {
      return httpHandler.handle(httpRequest);
    }
     if (httpRequest.url.includes( `${this.authenticationService.host}/usuario/resetPassword`) ) {
      return httpHandler.handle(httpRequest);
    }
     this.authenticationService.loadToken();
     const token = this.authenticationService.getToken();

     // clone the request ya que el request es inmutable
     const request = httpRequest.clone({
       setHeaders: {
                      Authorization: `Bearer ${token}`
                    }
     });
     return httpHandler.handle(request);
  }
}

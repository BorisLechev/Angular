import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { } // inject authService (SOLID)

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {// винаги (interface) за interceptor
    const token = this.authService.getToken();
    let jsonReq = req.clone({ // копираме го, защото никога не трябва да променяме истинския request след това го модифицирай
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(jsonReq);
  }
}

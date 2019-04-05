import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {

  constructor(public toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success) => {
      if (success instanceof HttpResponse) {
        if (success.url.endsWith('signin') || success.url.endsWith('signup') || success.url.endsWith('create') || success.url.includes('delete')) {
          this.toastr.success('Success', 'Success');
        }
      }
    }), catchError((error) => {
      this.toastr.error(error.error.message, 'Error');
      throw error;
    }));
  }
}

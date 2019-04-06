import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'; // от презентацията
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor { // ctrl + click HttpInterceptor
    constructor(private toastr: ToastrService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)  // винаги пренасяме req(инф) към следващият interceptor
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) { // когато не съм автентикиран
                        this.toastr.error(error.error.description);
                        this.router.navigate(['/login']); // върни ме да се логна
                    }

                    return throwError(error);
                })
            );
    }
}
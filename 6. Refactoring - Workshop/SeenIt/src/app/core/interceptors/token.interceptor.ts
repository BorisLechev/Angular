import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'; // от презентацията
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor { // ctrl + click HttpInterceptor
    constructor(private authService: AuthService, private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith('login')) { // само za Kinvey Basic authentication
            req = req.clone({ // req за login и register с clone правим нов request, защото е immutable не можем да го променяме директно
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`
                }
            });
        } else { // например за logout
            req = req.clone({ // req за login и register с clone правим нов request, защото е immutable не можем да го променяме директно
                setHeaders: {
                    'Authorization': `Kinvey ${this.authService.token}` // или localstorage... да вземем токена
                }
            });
        }

        return next.handle(req)  // винаги пренасяме req(инф) към следващият interceptor
            .pipe(
                tap((event: HttpEvent<any>) => { // слушай за events които идват
                    if (event instanceof HttpResponse && req.url.endsWith('login')) { // ако сървъра е върнал status code 200 и url е login да запази токена
                        this.toastr.success('Successfully registered.');
                        this.authService.saveUserInfo(event.body);
                    }
                })
            );
    }
}
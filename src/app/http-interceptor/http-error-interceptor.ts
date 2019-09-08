import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "../../environments/environment";

const HTTP_RETRY_NUM = 3;
const CONNECTION_REFUSED = 0;
const HTTP_STATUS_401 = 401;
const HTTP_STATUS_404 = 404;
const HTTP_STATUS_500 = 500;
const HTTP_STATUS_504 = 504;
const LOGIN_URL = environment.loginUrl+ '/login';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(HTTP_RETRY_NUM),
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            switch (error.status) {
              case HTTP_STATUS_401:
                this.router.navigate([LOGIN_URL]);
                break;
              case HTTP_STATUS_404:
                // this.router.navigate(['404']);
                return throwError('NotFound');
              case HTTP_STATUS_500:
              case HTTP_STATUS_504:
                this.router.navigate(['500']);
                return throwError('Server Error');
              case CONNECTION_REFUSED:
                this.router.navigate(['500']);
                return throwError('Server Error');
            }
          }
          this.router.navigate(['500']);
          return throwError(error);
        })
      );
  }
}
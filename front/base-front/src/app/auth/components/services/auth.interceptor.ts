import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, debounceTime, filter, finalize, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../../app.module';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService,
    private readonly oauthService: OAuthService) { }

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.accessToken;

    if (req.url.includes('/realms') || req.url.includes('/auth')) {
      return next.handle(req);
    } else {
      req = this.addToken(req, this.oauthService.getAccessToken());
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(req, next);
        }else if(error.status === 403){
          this.oauthService.logOut();
          this.router.navigate(['/login'])
          return throwError(() => error);
        }
         else {
          return throwError(() => error);
        }
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(
        switchMap((tokenResponse: any) => {
          this.isRefreshing = false;
          return next.handle(this.addToken(request, this.oauthService.getRefreshToken()));
        }),
        catchError((error) => {
          this.isRefreshing = false;
          this.oauthService.logOut();
          return throwError(() => error);
        }),
        finalize(() => this.isRefreshing = false)
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(accessToken => next.handle(this.addToken(request, accessToken)))
      );
    }
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'X-Tenant-ID': !sessionStorage.getItem("X-Tenant-ID") ? window.location.hostname : sessionStorage.getItem("X-Tenant-ID")!
      }
    });
  }
}

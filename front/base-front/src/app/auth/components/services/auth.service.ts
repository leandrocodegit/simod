import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __await } from 'tslib';
import { catchError, from, map, Observable, of, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment.dev';
import { Role } from '../../models/role-auth.enum';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../../app.module';



@Injectable({
  providedIn: 'root'
},
)
export class AuthService {

  constructor(
    private readonly oauthService: OAuthService,
    private readonly http: HttpClient,
    private readonly router: Router) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(environment.urlApi + '/auth/login', JSON.stringify(
      {
        email: email,
        password: password
      }), environment.headers
    )
  }

  refreshToken(): Observable<boolean> {
    this.oauthService.configure(authConfig);

    return from(this.oauthService.loadDiscoveryDocumentAndTryLogin()).pipe(
      switchMap(() => from(this.oauthService.refreshToken())),
      map(() => {
        console.log('Token atualizado com sucesso');
        return true;
      }),
      catchError(error => {
        console.error('Erro ao tentar fazer refresh do token:', error);
        this.oauthService.initLoginFlow();
        return of(false);
      })
    );
  }

  setTokens(data: any) {
    sessionStorage.setItem("access_token", data.access_token);
    sessionStorage.setItem("refresh_token", data.access_token);
  }

  setCliente(data: any) {
    localStorage.setItem("cliente.nome", data.nome);
  }

  get clienteId(): string {
    const clienteId = localStorage.getItem("token.clienteId");
    return clienteId ? clienteId : '';
  }

  get accessToken(): string | null {
    return localStorage.getItem("token.access");
  }

  public valid(): boolean {
    try {
      const expireMillis = this.decodeToken(this.oauthService.getAccessToken()).exp;
      let expire: number = Number.parseInt(expireMillis) * 1000 - 10000;
      const now = Date.now();

      /* console.log('exp', expire);
      console.log('now', now); */


      return now < expire;
    } catch (error) {
      return false;
    }
  }

  public isLoggedIn() {
    try {
      const expireMillis = this.decodeToken(this.oauthService.getRefreshToken()).exp;
      let expire: number = Number.parseInt(expireMillis) * 1000;
      const now = Date.now();
      console.log('Logado', now < expire);

      return now < expire;
    } catch (error) {
      return false;
    }
  }

  public extrairEmailUsuario() {
    try {
      const jwt = this.decodePayloadJWT();
      return jwt.sub;
    } catch (error) {
      return '';
    }
  }

 

  public extrairClienteId(token: string) {
    try {
      const jwt = this.decodeToken(token);
      const clienteId = jwt['azp'];
      return clienteId ? clienteId : '';
    } catch (error) {
      return '';
    }
  }

  public decodeToken(token: string): any | null {
    try {
      if (token) {
        const decode = jwtDecode<any>(token);
        return decode;
      }
    } catch (error) {
      return null;
    }

    return null;
  }

  public isBusiness() {
    try {
      const jwt = this.decodePayloadJWT();
      const business = jwt['business'];
      return business ? business : false;
    } catch (error) {
      return false;
    }
    return false;
  }

  isAuthorizedRoles(rolesData: Role[]): boolean {
    this.isLoggedIn();
    const tokenPayload = this.decodePayloadJWT();

    if (!tokenPayload || !tokenPayload.roles) {
      this.limparSessao();
      return false;
    }

    const userRoles: Role[] = tokenPayload.roles;

    if (!userRoles || !rolesData) {
      this.limparSessao();
      return false;
    }

    const hasRole = rolesData.some(role => userRoles.includes(role));

    if (!hasRole) {
      return false;
    }

    return true;
  }


  logout() {
    this.limparSessao();
    this.router.navigate(["/login"]);
  }

  limparSessao() {
    localStorage.clear();
  }

  public decodePayloadJWT(isRefresh?: boolean): any | null {
    try {
      let token = '';
      if (isRefresh)
        token = localStorage.getItem("token.refresh")!
      else token = localStorage.getItem("token.access")!;


      if (token) {
        const decode = jwtDecode<any>(token);
        return decode;
      }
    } catch (error) {
      return null;
    }

    return null;
  }

}

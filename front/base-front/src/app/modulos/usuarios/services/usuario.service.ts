import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __await } from 'tslib';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.dev';
import { Page } from '../../../shared/models/Page';
import { UsuarioRequest } from '../models/user-request.model';


@Injectable({
  providedIn: 'root'
},
)
export class UsuarioService {


  constructor(
    private readonly http: HttpClient) { }

  public criarUsuario(request: UsuarioRequest): Observable<any> {
    return this.http.post<any>(`${environment.urlApi}/usuario`, request);
  }

  public listaUsuarios(): Observable<Page<any>> {
    return this.http.get<any>(`${environment.urlApi}/usuario`);
  }
}

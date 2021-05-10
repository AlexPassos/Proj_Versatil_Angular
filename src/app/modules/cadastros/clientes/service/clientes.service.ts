import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { ClienteModel } from '../model/cliente-model';
import { IClientesService } from './iclientes-service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService implements IClientesService {

  private clienteModel!: ClienteModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addCliente(cliente: ClienteModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveCliente`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(cliente), this.httpOptions)
      .pipe(take(1));
  }
  updateCliente(cliente: ClienteModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateCliente`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(cliente), this.httpOptions)
      .pipe(take(1));
  }
  deleteCliente(cliente: ClienteModel) {
    this.apiUrl = `${environment.apiURL}/deleteCliente/${cliente.id}`;

    return this.http.delete(this.apiUrl).subscribe({
      next: (dados) => {
        //console.log(dados);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('exclusao completa');
      },
    });
  }
  setCliente(cliente: ClienteModel): void {
    this.clienteModel = cliente;
  }
  getCliente(): ClienteModel {
    return this.clienteModel;
  }
  consCliente(id: number): Observable<ClienteModel> {
    this.apiUrl = `${environment.apiURL}/getCliente/${id}`;
    return this.http.get<ClienteModel>(this.apiUrl);
  }

  cpfcnpjCliente(cpfcnpj: string): Observable<ClienteModel> {
    this.apiUrl = `${environment.apiURL}/getClienteCpfCnpj/${cpfcnpj}`;
    return this.http.get<ClienteModel>(this.apiUrl).pipe(take(1));
  }

  listClientes(): Observable<ClienteModel[]> {
    this.apiUrl = `${environment.apiURL}/listClientes`;
    return this.http.get<ClienteModel[]>(this.apiUrl);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { EstoqueEntradaModel } from '../model/estoqueentrada-model';
import { IEstoqueentradaService } from './iestoqueentrada-service';

@Injectable({
  providedIn: 'root'
})
export class EstoqueentradaService implements IEstoqueentradaService {

  private EntradaModel!: EstoqueEntradaModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addEntrada(entrada: EstoqueEntradaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveEstoqueentrada`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(entrada), this.httpOptions)
      .pipe(take(1));
  }
  updateEntrada(entrada: EstoqueEntradaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateEstoqueentrada`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(entrada), this.httpOptions)
      .pipe(take(1));
  }
  deleteEntrada(entrada: EstoqueEntradaModel) {
    this.apiUrl = `${environment.apiURL}/deleteEstoqueentrada/${entrada.id}`;

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
  setEntrada(entrada: EstoqueEntradaModel): void {
    this.EntradaModel = entrada;
  }
  getEntrada(): EstoqueEntradaModel {
    return this.EntradaModel;
  }
  consEntrada(id: number): Observable<EstoqueEntradaModel> {
    this.apiUrl = `${environment.apiURL}/getEstoqueentrada/${id}`;
    return this.http.get<EstoqueEntradaModel>(this.apiUrl);
  }

  listEntradas(): Observable<EstoqueEntradaModel[]> {
    this.apiUrl = `${environment.apiURL}/listEstoqueentradas`;
    return this.http.get<EstoqueEntradaModel[]>(this.apiUrl);
  }

}

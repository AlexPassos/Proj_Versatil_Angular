import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { EstoqueSaidaModel } from '../model/estoquesaida-model';
import { IEstoquesaidaService } from './iestoquesaida-service';

@Injectable({
  providedIn: 'root'
})
export class EstoquesaidaService implements IEstoquesaidaService {

  private saidaModel!: EstoqueSaidaModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addSaida(saida: EstoqueSaidaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveEstoquesaida`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(saida), this.httpOptions)
      .pipe(take(1));
  }
  updateSaida(saida: EstoqueSaidaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateEstoquesaida`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(saida), this.httpOptions)
      .pipe(take(1));
  }
  deleteSaida(saida: EstoqueSaidaModel) {
    this.apiUrl = `${environment.apiURL}/deleteEstoquesaida/${saida.id}`;

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
  setSaida(saida: EstoqueSaidaModel): void {
    this.saidaModel = saida;
  }
  getSaida(): EstoqueSaidaModel {
    return this.saidaModel;
  }
  consSaida(id: number): Observable<EstoqueSaidaModel> {
    this.apiUrl = `${environment.apiURL}/getEstoquesaida/${id}`;
    return this.http.get<EstoqueSaidaModel>(this.apiUrl);
  }

  listSaidas(): Observable<EstoqueSaidaModel[]> {
    this.apiUrl = `${environment.apiURL}/listEstoquesaidas`;
    return this.http.get<EstoqueSaidaModel[]>(this.apiUrl);
  }
}

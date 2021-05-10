import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { IBancosService } from './ibancos-service';
import { BancoModel } from '../model/banco-model';

@Injectable({
  providedIn: 'root',
})
export class BancosService implements IBancosService {
  private bancoModel!: BancoModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  setBanco(banco: BancoModel): void {
    this.bancoModel = banco;
  }

  getBanco(): BancoModel {
    return this.bancoModel;
  }

  addBanco(banco: BancoModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveBanco`;

    return this.http.post<string>(
      this.apiUrl,
      JSON.stringify(banco),
      this.httpOptions
    ).pipe(take(1));
  }

  updateBanco(banco: BancoModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateBanco`;
    return this.http.post<string>(
      this.apiUrl,
      JSON.stringify(banco),
      this.httpOptions
    ).pipe(take(1));
  }

  deleteBanco(banco: BancoModel) {
    this.apiUrl = `${environment.apiURL}/deleteBanco/${banco.id}`;

    return this.http.delete(this.apiUrl).subscribe({
      next: (dados) => {
        console.log(dados);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('exclusao completa');
      },
    });
  }

  consBanco(id: number): Observable<BancoModel> {
    this.apiUrl = `${environment.apiURL}/getBanco/${id}`;
    return this.http.get<BancoModel>(this.apiUrl);
  }

  listBancos(): Observable<BancoModel[]> {
    this.apiUrl = `${environment.apiURL}/listBancos`;
    return this.http.get<BancoModel[]>(this.apiUrl);

            //.pipe(catchError(this.handleError<BancoModel[]>('countries', [])));
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}

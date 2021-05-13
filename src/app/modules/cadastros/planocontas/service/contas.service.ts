import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { IContasService } from './icontas-service';
import { ContasModel } from '../model/contas-model';

@Injectable({
  providedIn: 'root'
})
export class ContasService implements IContasService {

  private contaModel!: ContasModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addConta(conta: ContasModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveConta`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(conta), this.httpOptions)
      .pipe(take(1));
  }
  updateConta(conta: ContasModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateConta`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(conta), this.httpOptions)
      .pipe(take(1));
  }
  deleteConta(conta: ContasModel) {
    this.apiUrl = `${environment.apiURL}/deleteConta/${conta.id}`;

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
  setConta(conta: ContasModel): void {
    this.contaModel = conta;
  }
  getConta(): ContasModel {
    return this.contaModel;
  }
  consConta(id: number): Observable<ContasModel> {
    this.apiUrl = `${environment.apiURL}/getConta/${id}`;
    return this.http.get<ContasModel>(this.apiUrl);
  }

  maxCodigo(idgrupo: number, idsubgrupo: number) {
    this.apiUrl = `${environment.apiURL}/getMaxCodigoConta/${idgrupo}/${idsubgrupo}`;
    return this.http.get(this.apiUrl).pipe(map((res: any) => {
      return res.data.map((x: any) => x.codigo + 1);
    }));
  }

}

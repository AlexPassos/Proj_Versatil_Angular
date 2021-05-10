import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { IGruposService } from './igrupos-service';
import { ContasGruposModel } from '../model/contasgrupos-model';

@Injectable({
  providedIn: 'root'
})
export class GruposService implements IGruposService {

  private gruposModel!: ContasGruposModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addGrupo(grupo: ContasGruposModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveConta`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(grupo), this.httpOptions)
      .pipe(take(1));
  }
  updateGrupo(grupo: ContasGruposModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateConta`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(grupo), this.httpOptions)
      .pipe(take(1));
  }
  deleteGrupo(grupo: ContasGruposModel) {
    this.apiUrl = `${environment.apiURL}/deleteConta/${grupo.id}`;

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
  setGrupo(grupo: ContasGruposModel): void {
    this.gruposModel = grupo;
  }
  getGrupo(): ContasGruposModel {
    return this.gruposModel;
  }
  consGrupo(id: number): Observable<ContasGruposModel> {
    this.apiUrl = `${environment.apiURL}/getConta/${id}`;
    return this.http.get<ContasGruposModel>(this.apiUrl);
  }

  maxCodigo(id: number) {
    this.apiUrl = `${environment.apiURL}/getMaxCodigo/${id}`;
    return this.http.get(this.apiUrl).pipe(map((res: any) => {
      return res.data.map((x: any) => x.codigo + 1);
    }));
  }

}

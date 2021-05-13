import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { ISubgruposService } from './isubgrupos-service';
import { ContasSubgruposModel } from '../model/contassubgrupos-model';

@Injectable({
  providedIn: 'root'
})
export class SubgruposService implements ISubgruposService {

  private subgruposModel!: ContasSubgruposModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addSubgrupo(subgrupo: ContasSubgruposModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveSubgrupo`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(subgrupo), this.httpOptions)
      .pipe(take(1));
  }
  updateSubgrupo(subgrupo: ContasSubgruposModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateSubgrupo`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(subgrupo), this.httpOptions)
      .pipe(take(1));
  }
  deleteSubgrupo(subgrupo: ContasSubgruposModel) {
    this.apiUrl = `${environment.apiURL}/deleteSubgrupo/${subgrupo.id}`;

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
  setSubgrupo(subgrupo: ContasSubgruposModel): void {
    this.subgruposModel = subgrupo;
  }
  getSubgrupo(): ContasSubgruposModel {
    return this.subgruposModel;
  }
  consSubgrupo(id: number): Observable<ContasSubgruposModel> {
    this.apiUrl = `${environment.apiURL}/getSubgrupo/${id}`;
    return this.http.get<ContasSubgruposModel>(this.apiUrl);
  }

  maxCodigo(id: number) {
    this.apiUrl = `${environment.apiURL}/getMaxCodigoSubgrupo/${id}`;
    return this.http.get(this.apiUrl).pipe(map((res: any) => {
      return res.data.map((x: any) => x.codigo + 1);
    }));
  }

  listSubgrupos(idgrupo: number): Observable<ContasSubgruposModel[]> {
    this.apiUrl = `${environment.apiURL}/listSubgrupos/${idgrupo}`;
    return this.http.get<ContasSubgruposModel[]>(this.apiUrl);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { ContasDemonstrativosModel } from '../model/contasdemonstrativos-model';
import { IPlanoContasService } from './iplanocontas-service';
import { ContasGruposModel } from '../model/contasgrupos-model';
import { ContasSubgruposModel } from '../model/contassubgrupos-model';
import { ContasModel } from '../model/contas-model';

@Injectable({
  providedIn: 'root'
})
export class PlanocontasService implements IPlanoContasService {

  private demonstrativosModel!: ContasDemonstrativosModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  listDemonstrativos(): Observable<ContasDemonstrativosModel[]> {
    this.apiUrl = `${environment.apiURL}/listContasdemonstrativos`;
    return this.http.get<ContasDemonstrativosModel[]>(this.apiUrl);
  }

  listGrupos(): Observable<ContasGruposModel[]> {
    this.apiUrl = `${environment.apiURL}/listContasgrupo/1`;
    return this.http.get<ContasGruposModel[]>(this.apiUrl);
  }

  listSubgrupos(idgrupo: number): Observable<ContasSubgruposModel[]> {
    this.apiUrl = `${environment.apiURL}/listContassubgrupo/${idgrupo}`;
    return this.http.get<ContasSubgruposModel[]>(this.apiUrl);
  }

  listContas(idgrupo: number, idsubgrupo: number): Observable<ContasModel[]> {
    this.apiUrl = `${environment.apiURL}/listContas/${idgrupo}/${idsubgrupo}`;
    return this.http.get<ContasModel[]>(this.apiUrl);
  }

}

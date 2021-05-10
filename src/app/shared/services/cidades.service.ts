import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { CidadeModel } from '../models/cidade-model';
import { UfModel } from '../models/uf-model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  listCidades(idestado: number): Observable<CidadeModel[]> {
    this.apiUrl = `${environment.apiURL}/listCidades/${idestado}`;
    return this.http.get<CidadeModel[]>(this.apiUrl);
  }

}

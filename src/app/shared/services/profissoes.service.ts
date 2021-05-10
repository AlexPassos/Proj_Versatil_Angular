import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ProfissaoModel } from '../models/profissao-model';

@Injectable({
  providedIn: 'root',
})
export class ProfissoesService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  listProfissoes(): Observable<ProfissaoModel[]> {
    this.apiUrl = `${environment.apiURL}/listProfissoes`;
    return this.http.get<ProfissaoModel[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { UnidadeModel } from '../models/unidade-model';

@Injectable({
  providedIn: 'root',
})
export class UnidadesService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  listUnidades(): Observable<UnidadeModel[]> {
    this.apiUrl = `${environment.apiURL}/listUnidades`;
    return this.http.get<UnidadeModel[]>(this.apiUrl);
  }
}

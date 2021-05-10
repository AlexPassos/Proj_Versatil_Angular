import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { UfModel } from '../models/uf-model';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  listEstados(): Observable<UfModel[]> {
    this.apiUrl = `${environment.apiURL}/listEstados`;
    return this.http.get<UfModel[]>(this.apiUrl);
  }
}

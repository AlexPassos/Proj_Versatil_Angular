import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { VerificarEstoqueModel } from '../model/verificarestoque-model';
import { IVerificarEstoqueService } from './iverificarestoque-service';

@Injectable({
  providedIn: 'root'
})
export class VerificarEstoqueService implements IVerificarEstoqueService {

  private estoqueModel!: VerificarEstoqueModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  listEstoque(): Observable<VerificarEstoqueModel[]> {
    throw new Error('Method not implemented.');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { EstoqueCadastroModel } from '../model/estoquecadastro-model';
import { IEstoquecadastroService } from './iestoquecadastro-service';

@Injectable({
  providedIn: 'root',
})
export class EstoquecadastroService implements IEstoquecadastroService {

  private produtoModel!: EstoqueCadastroModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addProduto(produto: EstoqueCadastroModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveProduto`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(produto), this.httpOptions)
      .pipe(take(1));
  }
  updateProduto(produto: EstoqueCadastroModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateProduto`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(produto), this.httpOptions)
      .pipe(take(1));
  }
  deleteProduto(produto: EstoqueCadastroModel) {
    this.apiUrl = `${environment.apiURL}/deleteProduto/${produto.id}`;

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
  setProduto(produto: EstoqueCadastroModel): void {
    this.produtoModel = produto;
  }
  getProduto(): EstoqueCadastroModel {
    return this.produtoModel;
  }
  consProduto(id: number): Observable<EstoqueCadastroModel> {
    this.apiUrl = `${environment.apiURL}/getProduto/${id}`;
    return this.http.get<EstoqueCadastroModel>(this.apiUrl);
  }

  listProdutos(): Observable<EstoqueCadastroModel[]> {
    this.apiUrl = `${environment.apiURL}/listProdutos`;
    return this.http.get<EstoqueCadastroModel[]>(this.apiUrl);
  }
}

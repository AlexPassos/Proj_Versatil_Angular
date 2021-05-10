import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { MarcaModel } from '../model/marca-model';
import { IMarcasService } from './imarcas-service';

@Injectable({
  providedIn: 'root',
})
export class MarcasService implements IMarcasService {
  private marcaModel!: MarcaModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addMarca(marca: MarcaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveMarca`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(marca), this.httpOptions)
      .pipe(take(1));
  }
  updateMarca(marca: MarcaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateMarca`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(marca), this.httpOptions)
      .pipe(take(1));
  }
  deleteMarca(marca: MarcaModel) {
    this.apiUrl = `${environment.apiURL}/deleteMarca/${marca.id}`;

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
  setMarca(marca: MarcaModel): void {
    this.marcaModel = marca;
  }
  getMarca(): MarcaModel {
    return this.marcaModel;
  }
  consMarca(id: number): Observable<MarcaModel> {
    this.apiUrl = `${environment.apiURL}/getMarca/${id}`;
    return this.http.get<MarcaModel>(this.apiUrl);
  }
  listMarcas(): Observable<MarcaModel[]> {
    this.apiUrl = `${environment.apiURL}/listMarcas`;
    return this.http.get<MarcaModel[]>(this.apiUrl);
  }
}

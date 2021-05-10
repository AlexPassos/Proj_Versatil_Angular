import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { ColaboradorModel } from '../model/colaborador-model';
import { IColaboradoresService } from './icolaboradores-service';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService implements IColaboradoresService{

  private colaboradorModel!: ColaboradorModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addColaborador(colaborador: ColaboradorModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveFuncionario`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(colaborador), this.httpOptions)
      .pipe(take(1));
  }
  updateColaborador(colaborador: ColaboradorModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateFuncionario`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(colaborador), this.httpOptions)
      .pipe(take(1));
  }
  deleteColaborador(colaborador: ColaboradorModel) {
    this.apiUrl = `${environment.apiURL}/deleteFuncionario/${colaborador.id}`;

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
  setColaborador(Colaborador: ColaboradorModel): void {
    this.colaboradorModel = Colaborador;
  }
  getColaborador(): ColaboradorModel {
    return this.colaboradorModel;
  }
  consColaborador(id: number): Observable<ColaboradorModel> {
    this.apiUrl = `${environment.apiURL}/getFuncionario/${id}`;
    return this.http.get<ColaboradorModel>(this.apiUrl);
  }

  cpfColaborador(cpf: string): Observable<ColaboradorModel> {
    this.apiUrl = `${environment.apiURL}/getFuncionarioCpf/${cpf}`;
    return this.http.get<ColaboradorModel>(this.apiUrl).pipe(take(1));
  }

  listColaboradores(): Observable<ColaboradorModel[]> {
    this.apiUrl = `${environment.apiURL}/listFuncionarios`;
    return this.http.get<ColaboradorModel[]>(this.apiUrl);
  }

}

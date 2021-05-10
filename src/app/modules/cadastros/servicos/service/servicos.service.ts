import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ServicoModel } from '../model/servico-model';
import { IServicosService } from './iservicos-service';

@Injectable({
  providedIn: 'root'
})
export class ServicosService  implements IServicosService {

  private servicoModel!: ServicoModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addServico(servico: ServicoModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveServico`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(servico), this.httpOptions)
      .pipe(take(1));
  }
  updateServico(servico: ServicoModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateServico`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(servico), this.httpOptions)
      .pipe(take(1));
  }
  deleteServico(servico: ServicoModel) {
    this.apiUrl = `${environment.apiURL}/deleteServico/${servico.id}`;

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
  setServico(servico: ServicoModel): void {
    this.servicoModel = servico;
  }
  getServico(): ServicoModel {
    return this.servicoModel;
  }
  consServico(id: number): Observable<ServicoModel> {
    this.apiUrl = `${environment.apiURL}/getServico/${id}`;
    return this.http.get<ServicoModel>(this.apiUrl);
  }
  listServicos(): Observable<ServicoModel[]> {
    this.apiUrl = `${environment.apiURL}/listServicos`;
    return this.http.get<ServicoModel[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { SetorModel } from '../model/setor-model';
import { ISetoresService } from './isetores-service';

@Injectable({
  providedIn: 'root'
})
export class SetoresService implements ISetoresService {

  private setorModel!: SetorModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addSetor(setor: SetorModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveSetor`;

    return this.http
      .post<string>(this.apiUrl, JSON.stringify(setor), this.httpOptions)
      .pipe(take(1));
  }
  updateSetor(setor: SetorModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateSetor`;
    return this.http
      .post<string>(this.apiUrl, JSON.stringify(setor), this.httpOptions)
      .pipe(take(1));
  }
  deleteSetor(setor: SetorModel) {
    this.apiUrl = `${environment.apiURL}/deleteSetor/${setor.id}`;

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
  setSetor(setor: SetorModel): void {
    this.setorModel = setor;
  }
  getSetor(): SetorModel {
    return this.setorModel;
  }
  consSetor(id: number): Observable<SetorModel> {
    this.apiUrl = `${environment.apiURL}/getSetor/${id}`;
    return this.http.get<SetorModel>(this.apiUrl);
  }
  listSetores(): Observable<SetorModel[]> {
    this.apiUrl = `${environment.apiURL}/listSetores`;
    return this.http.get<SetorModel[]>(this.apiUrl);
  }
}

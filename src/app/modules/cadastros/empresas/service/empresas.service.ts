import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../model/empresa-model';

import { IEmpresasService } from './iempresas-service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService implements IEmpresasService {

  private empresaModel!: EmpresaModel;
  private apiUrl = environment.apiURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addEmpresa(empresa: EmpresaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/saveEmpresa`;
console.log(JSON.stringify(empresa));
    return this.http.post<string>(
      this.apiUrl,
      JSON.stringify(empresa),
      this.httpOptions
    );
  }
  updateEmpresa(empresa: EmpresaModel): Observable<string> {
    this.apiUrl = `${environment.apiURL}/updateEmpresa`;
    return this.http.post<string>(
      this.apiUrl,
      JSON.stringify(empresa),
      this.httpOptions
    );
  }
  deleteEmpresa(empresa: EmpresaModel) {
    this.apiUrl = `${environment.apiURL}/deleteEmpresa/${empresa.id}`;

    return this.http.delete(this.apiUrl).subscribe({
      next: (dados) => {
        console.log(dados);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('exclusao completa');
      },
    });
  }
  setEmpresa(empresa: EmpresaModel): void {
    this.empresaModel = empresa;
  }
  getEmpresa(): EmpresaModel {
    return this.empresaModel;
  }
  consEmpresa(id: number): Observable<EmpresaModel> {
    this.apiUrl = `${environment.apiURL}/getEmpresa/${id}`;
    return this.http.get<EmpresaModel>(this.apiUrl);
  }
  listEmpresas(): Observable<EmpresaModel[]> {
    this.apiUrl = `${environment.apiURL}/listEmpresas`;
    return this.http.get<EmpresaModel[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { CfopModel } from '../models/cfop-model';

@Injectable({
  providedIn: 'root',
})
export class CfopService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  listCfops(): Observable<CfopModel[]> {
    this.apiUrl = `${environment.apiURL}/listCfop`;
    return this.http.get<CfopModel[]>(this.apiUrl);
  }
}

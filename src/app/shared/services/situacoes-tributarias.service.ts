import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { SitTributariaCofinsModel } from '../models/sit-tributaria-cofins-model';
import { SitTributariaIcmsModel } from '../models/sit-tributaria-icms-model';
import { SitTributariaIpiModel } from '../models/sit-tributaria-ipi-model';
import { SitTributariaPisModel } from '../models/sit-tributaria-pis-model';

@Injectable({
  providedIn: 'root',
})
export class SituacoesTributariasService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  listCofins(): Observable<SitTributariaCofinsModel[]> {
    this.apiUrl = `${environment.apiURL}/listSituacaotributariacofins`;
    return this.http.get<SitTributariaCofinsModel[]>(this.apiUrl);
  }

  listIcms(): Observable<SitTributariaIcmsModel[]> {
    this.apiUrl = `${environment.apiURL}/listSituacaotributaria`;
    return this.http.get<SitTributariaIcmsModel[]>(this.apiUrl);
  }

  listIpi(): Observable<SitTributariaIpiModel[]> {
    this.apiUrl = `${environment.apiURL}/listSituacaotributariaipi`;
    return this.http.get<SitTributariaIpiModel[]>(this.apiUrl);
  }

  listPis(): Observable<SitTributariaPisModel[]> {
    this.apiUrl = `${environment.apiURL}/listSituacaotributariapis`;
    return this.http.get<SitTributariaPisModel[]>(this.apiUrl);
  }
}

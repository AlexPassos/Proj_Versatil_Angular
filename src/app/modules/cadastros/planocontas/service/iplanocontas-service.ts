import { Observable } from 'rxjs';

import { ContasDemonstrativosModel } from './../model/contasdemonstrativos-model';
import { ContasGruposModel } from '../model/contasgrupos-model';
import { ContasSubgruposModel } from '../model/contassubgrupos-model';
import { ContasModel } from '../model/contas-model';

export interface IPlanoContasService {
  listDemonstrativos(): Observable<ContasDemonstrativosModel[]>;
  listGrupos(): Observable<ContasGruposModel[]>;
  listSubgrupos(idgrupo: number): Observable<ContasSubgruposModel[]>;
  listContas(idgrupo: number, idsubgrupo: number): Observable<ContasModel[]>;
}

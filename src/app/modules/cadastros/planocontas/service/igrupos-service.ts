import { Observable } from 'rxjs';

import { ContasGruposModel } from '../model/contasgrupos-model';

export interface IGruposService {

  addGrupo(grupo: ContasGruposModel): Observable<string>;

  updateGrupo(grupo: ContasGruposModel): Observable<string>;

  deleteGrupo(grupo: ContasGruposModel): void;

  setGrupo(grupo: ContasGruposModel): void;

  getGrupo(): ContasGruposModel;

  consGrupo(id: number): Observable<ContasGruposModel>;

  maxCodigo(id: number): void;
}

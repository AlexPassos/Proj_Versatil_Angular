import { Observable } from 'rxjs';

import { ContasSubgruposModel } from '../model/contassubgrupos-model';

export interface ISubgruposService {

  addSubgrupo(subgrupo: ContasSubgruposModel): Observable<string>;

  updateSubgrupo(subgrupo: ContasSubgruposModel): Observable<string>;

  deleteSubgrupo(subgrupo: ContasSubgruposModel): void;

  setSubgrupo(subgrupo: ContasSubgruposModel): void;

  getSubgrupo(): ContasSubgruposModel;

  consSubgrupo(id: number): Observable<ContasSubgruposModel>;

}

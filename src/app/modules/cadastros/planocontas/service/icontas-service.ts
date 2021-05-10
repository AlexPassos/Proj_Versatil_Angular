import { Observable } from 'rxjs';

import { ContasModel } from '../model/contas-model';

export interface IContasService {

  addConta(conta: ContasModel): Observable<string>;

  updateConta(conta: ContasModel): Observable<string>;

  deleteConta(conta: ContasModel): void;

  setConta(conta: ContasModel): void;

  getConta(): ContasModel;

  consConta(id: number): Observable<ContasModel>;

}

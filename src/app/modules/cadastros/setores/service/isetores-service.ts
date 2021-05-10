import { Observable } from 'rxjs';
import { SetorModel } from './../model/setor-model';
export interface ISetoresService {

  addSetor(setor: SetorModel): Observable<string>;

  updateSetor(setor: SetorModel): Observable<string>;

  deleteSetor(setor: SetorModel): void;

  setSetor(setor: SetorModel): void;

  getSetor(): SetorModel;

  consSetor(id: number): Observable<SetorModel>;

  listSetores(): Observable<SetorModel[]>;
}

import { Observable } from 'rxjs';
import { ColaboradorModel } from './../model/colaborador-model';
export interface IColaboradoresService {

  addColaborador(colaborador: ColaboradorModel): Observable<string>;

  updateColaborador(colaborador: ColaboradorModel): Observable<string>;

  deleteColaborador(colaborador: ColaboradorModel): void;

  setColaborador(colaborador: ColaboradorModel): void;

  getColaborador(): ColaboradorModel;

  consColaborador(id: number): Observable<ColaboradorModel>;

  cpfColaborador(cpf: string): Observable<ColaboradorModel>;

  listColaboradores(): Observable<ColaboradorModel[]>;
}

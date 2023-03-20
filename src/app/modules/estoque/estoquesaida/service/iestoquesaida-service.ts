import { Observable } from 'rxjs';
import { EstoqueSaidaModel } from './../model/estoquesaida-model';

export interface IEstoquesaidaService {

  addSaida(saida: EstoqueSaidaModel): Observable<string>;

  updateSaida(saida: EstoqueSaidaModel): Observable<string>;

  deleteSaida(saida: EstoqueSaidaModel): void;

  setSaida(saida: EstoqueSaidaModel): void;

  getSaida(): EstoqueSaidaModel;

  consSaida(id: number): Observable<EstoqueSaidaModel>;

  listSaidas(): Observable<EstoqueSaidaModel[]>;
}

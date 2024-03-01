import { Observable } from 'rxjs';
import { EstoqueEntradaModel } from './../model/estoqueentrada-model';

export interface IEstoqueentradaService {

  addEntrada(entrada: EstoqueEntradaModel): Observable<string>;

  updateEntrada(entrada: EstoqueEntradaModel): Observable<string>;

  deleteEntrada(entrada: EstoqueEntradaModel): void;

  setEntrada(entrada: EstoqueEntradaModel): void;

  getEntrada(): EstoqueEntradaModel;

  consEntrada(id: number): Observable<EstoqueEntradaModel>;

  listEntradas(): Observable<EstoqueEntradaModel[]>;
}

import { Observable } from 'rxjs';
import { VerificarEstoqueModel } from './../model/verificarestoque-model';

export interface IVerificarEstoqueService {

  listEstoque(): Observable<VerificarEstoqueModel[]>;
}

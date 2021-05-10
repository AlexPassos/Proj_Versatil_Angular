import { Observable } from 'rxjs';
import { EstoqueCadastroModel } from './../model/estoquecadastro-model';

export interface IEstoquecadastroService {

  addProduto(produto: EstoqueCadastroModel): Observable<string>;

  updateProduto(produto: EstoqueCadastroModel): Observable<string>;

  deleteProduto(produto: EstoqueCadastroModel): void;

  setProduto(produto: EstoqueCadastroModel): void;

  getProduto(): EstoqueCadastroModel;

  consProduto(id: number): Observable<EstoqueCadastroModel>;

  listProdutos(): Observable<EstoqueCadastroModel[]>;
}

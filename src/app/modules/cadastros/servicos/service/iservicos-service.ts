import { Observable } from 'rxjs';
import { ServicoModel } from './../model/servico-model';
export interface IServicosService {

  addServico(Servico: ServicoModel): Observable<string>;

  updateServico(Servico: ServicoModel): Observable<string>;

  deleteServico(Servico: ServicoModel): void;

  setServico(Servico: ServicoModel): void;

  getServico(): ServicoModel;

  consServico(id: number): Observable<ServicoModel>;

  listServicos(): Observable<ServicoModel[]>;
}

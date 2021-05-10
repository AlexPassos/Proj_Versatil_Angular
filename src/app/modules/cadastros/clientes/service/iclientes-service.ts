import { Observable } from 'rxjs';
import { ClienteModel } from './../model/cliente-model';
export interface IClientesService {

  addCliente(cliente: ClienteModel): Observable<string>;

  updateCliente(cliente: ClienteModel): Observable<string>;

  deleteCliente(cliente: ClienteModel): void;

  setCliente(cliente: ClienteModel): void;

  getCliente(): ClienteModel;

  consCliente(id: number): Observable<ClienteModel>;

  cpfcnpjCliente(cpfcnpj: string): Observable<ClienteModel>;

  listClientes(): Observable<ClienteModel[]>;
}

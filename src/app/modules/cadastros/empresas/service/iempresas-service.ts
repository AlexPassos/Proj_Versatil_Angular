import { Observable } from 'rxjs';
import { EmpresaModel } from './../model/empresa-model';

export interface IEmpresasService {

  addEmpresa(empresa: EmpresaModel): Observable<string>;

  updateEmpresa(empresa: EmpresaModel): Observable<string>;

  deleteEmpresa(empresa: EmpresaModel): void;

  setEmpresa(empresa: EmpresaModel): void;

  getEmpresa(): EmpresaModel;

  consEmpresa(id: number): Observable<EmpresaModel>;

  listEmpresas(): Observable<EmpresaModel[]>;

}

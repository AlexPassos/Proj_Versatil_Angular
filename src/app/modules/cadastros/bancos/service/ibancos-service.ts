import { Observable } from 'rxjs';
import { BancoModel } from './../model/banco-model';
export interface IBancosService {

  addBanco(banco: BancoModel): Observable<string>;

  updateBanco(banco: BancoModel): Observable<string>;

  deleteBanco(banco: BancoModel): void;

  setBanco(banco: BancoModel): void;

  getBanco(): BancoModel;

  consBanco(id: number): Observable<BancoModel>;

  listBancos(): Observable<BancoModel[]>;
}

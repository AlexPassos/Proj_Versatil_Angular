import { Observable } from 'rxjs';
import { MarcaModel } from './../model/marca-model';
export interface IMarcasService {

  addMarca(marca: MarcaModel): Observable<string>;

  updateMarca(marca: MarcaModel): Observable<string>;

  deleteMarca(marca: MarcaModel): void;

  setMarca(marca: MarcaModel): void;

  getMarca(): MarcaModel;

  consMarca(id: number): Observable<MarcaModel>;

  listMarcas(): Observable<MarcaModel[]>;
}

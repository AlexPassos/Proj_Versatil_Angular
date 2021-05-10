import { EmpresaModel } from './../../empresas/model/empresa-model';

export class MarcaModel {
  id!: number;
  descricao?: string;
  empresaID?: EmpresaModel;
}

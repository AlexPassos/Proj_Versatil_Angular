import { EmpresaModel } from './../../empresas/model/empresa-model';

export class SetorModel {
  id!: number;
  descricao?: string;
  empresaID?: EmpresaModel;
}

import { EmpresaModel } from './../../empresas/model/empresa-model';

export class BancoModel {
  id!: number;
  descricao?: string;
  empresaID?: EmpresaModel;
}

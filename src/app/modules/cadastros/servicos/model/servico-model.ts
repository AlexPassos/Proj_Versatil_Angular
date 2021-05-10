import { EmpresaModel } from './../../empresas/model/empresa-model';

export class ServicoModel {
  id!: number;
  descricao?: string;
  valor?: number;
  empresaID?: EmpresaModel;
}

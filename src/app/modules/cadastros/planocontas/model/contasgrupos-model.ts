import { ContasDemonstrativosModel } from './contasdemonstrativos-model';
import { EmpresaModel } from "../../empresas/model/empresa-model";

export class ContasGruposModel {
  id!: number;
  contasdemonstrativosID!: number;
  codigo!: number;
  nome!: string;
  caixa!: boolean;
  lucro!: boolean;
  empresaID!: number;

  contasdemonstrativos!: ContasDemonstrativosModel;
  empresa!: EmpresaModel;
}

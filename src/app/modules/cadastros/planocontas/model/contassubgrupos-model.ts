import { ContasDemonstrativosModel } from './contasdemonstrativos-model';
import { ContasGruposModel } from './contasgrupos-model';
import { EmpresaModel } from "../../empresas/model/empresa-model";

export class ContasSubgruposModel {
  id!: number;
  contasdemonstrativosID!: number;
  contasgruposID!: number;
  codigo!: number;
  nome!: string;
  caixa!: boolean;
  lucro!: boolean;
  empresaID!: number;

  contasdemonstrativos!: ContasDemonstrativosModel;
  contasgrupos!: ContasGruposModel;
  empresa!: EmpresaModel;
}

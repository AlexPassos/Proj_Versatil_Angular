import { ContasDemonstrativosModel } from './contasdemonstrativos-model';
import { ContasGruposModel } from './contasgrupos-model';
import { ContasSubgruposModel } from './contassubgrupos-model';
import { EmpresaModel } from "../../empresas/model/empresa-model";

export class ContasModel {
  id!: number;
  contasdemonstrativosID!: number;
  contasgruposID!: number;
  contassubgruposID!: number;
  codigo!: number;
  nome!: string;
  caixa!: boolean;
  lucro!: boolean;
  situacao!: boolean;
  empresaID!: number;

  contasdemonstrativos!: ContasDemonstrativosModel;
  contasgrupos!: ContasGruposModel;
  contassubgrupos!: ContasSubgruposModel;
  empresa!: EmpresaModel;
}

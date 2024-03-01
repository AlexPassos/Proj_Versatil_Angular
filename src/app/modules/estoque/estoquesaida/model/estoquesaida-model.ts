import { EmpresaModel } from "src/app/modules/cadastros/empresas/model/empresa-model";
import { EstoqueCadastroModel } from "src/app/modules/cadastros/estoquecadastro/model/estoquecadastro-model";

export class EstoqueSaidaModel {
  id!: number;
  datacad!: Date;
  estoquecadastroID!: number;
  quantidade!: number;
  obs!: string;
  empresaID!: number;

  Estoquecadastro!: EstoqueCadastroModel;
  empresa!: EmpresaModel;
}

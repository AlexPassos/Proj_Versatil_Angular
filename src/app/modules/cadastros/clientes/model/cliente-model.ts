import { EmpresaModel } from './../../empresas/model/empresa-model';
import { CidadeModel } from "../../../../shared/models/cidade-model";
import { UfModel } from "../../../../shared/models/uf-model";
import { ProfissaoModel } from "../../../../shared/models/profissao-model";

export class ClienteModel {
  id!: number;
  datacad!: Date;
  tipo!: number;
  situacao!: boolean;
  nome!: string;
  sexo!: number;
  nascimento!: Date;
  civil!: number;
  profissaoID!: number;
  fantasia!: string;
  rgie!: string;
  orgaoemissor!: string;
  dataemissao!: Date;
  cpfcnpj!: string;
  sitlimite!: boolean;
  limite!: number;
  endereco!: string;
  numero!: string;
  complemento!: string;
  bairro!: string;
  cidadeID!: number;
  ufID!: number;
  cep!: string;
  telefone!: string;
  celularfax!: string;
  email!: string;
  obs!: string;
  cod!: string;
  empresaID!: number;
  Profisso!: ProfissaoModel;
  empresa!: EmpresaModel;
  cidade!: CidadeModel;
  uf!: UfModel;
}

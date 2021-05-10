import { CidadeModel } from "../../../../shared/models/cidade-model";
import { UfModel } from "../../../../shared/models/uf-model";

export class EmpresaModel {
  id!: number;
  razao!: string;
  fantasia!: string;
  ie!: string;
  cnpj!: string;
  endereco!: string;
  numero!: string;
  complemento!: string;
  bairro!: string;
  cidadeID!: number;
  ufID!: number;
  cep!: string;
  telefone!: string;
  fax!: string;
  email!: string;
  cidade!: CidadeModel;
  uf!: UfModel;
}

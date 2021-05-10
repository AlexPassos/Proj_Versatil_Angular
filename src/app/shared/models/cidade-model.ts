import { UfModel } from './uf-model';

export interface CidadeModel {
  id?: number;
  codibge?: string;
  nome?: string;
  ufID?: UfModel;
}

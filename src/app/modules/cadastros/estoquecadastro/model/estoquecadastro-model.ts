import { SitTributariaPisModel } from './../../../../shared/models/sit-tributaria-pis-model';
import { SitTributariaIpiModel } from './../../../../shared/models/sit-tributaria-ipi-model';
import { SitTributariaCofinsModel } from './../../../../shared/models/sit-tributaria-cofins-model';
import { SitTributariaIcmsModel } from './../../../../shared/models/sit-tributaria-icms-model';
import { EmpresaModel } from './../../empresas/model/empresa-model';
import { UnidadeModel } from "../../../../shared/models/unidade-model";
import { CfopModel } from "../../../../shared/models/cfop-model";
import { MarcaModel } from '../../marcas/model/marca-model';

export class EstoqueCadastroModel {
  id!: number;
  situacao!: boolean;
  datacad!: Date;
  descricao!: string;
  unidadesID!: number;
  marcasID!: number;
  ncm!: string;
  cfopID!: number;
  peso!: number;
  comissao!: number;
  valor!: number;
  obs!: string;

  tribicmsID!: number;
  aliquotacredito!: string;
  aliquotabaseicms!: string;
  aliquotaicms!: string;
  pautafiscal!: string;
  aliquotabaseicmsst!: string;
  aliquotaicmsst!: string;
  tribpisID!: number;
  aliquotapis!: string;
  tribcofinsID!: number;
  aliquotacofins!: string;
  tribipiID!: number;
  aliquotaipi!: string;
  aliquotaiss!: string;
  cod!: string;
  empresaID!: number;
  cest!: string;

  unidade!: UnidadeModel;
  marca!: MarcaModel;
  cfop!: CfopModel;
  situacao_tributarium!: SitTributariaIcmsModel;
  situacao_tributaria_cofin!: SitTributariaCofinsModel;
  situacao_tributaria_ipi!: SitTributariaIpiModel;
  situacao_tributaria_pi!: SitTributariaPisModel;
  empresa!: EmpresaModel;
}

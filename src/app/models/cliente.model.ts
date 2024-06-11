import { Cidade } from "./cidade.model";

export class Cliente{
  id?: number;
  nomeCliente?: string;
  nomeEmpresa?: string;
  cnpj?: string;
  cpfCliente?: string;
  endereco?: string;
  cidade?: Cidade;
}

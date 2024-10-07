import { Cidade } from "./cidade.models";

export class Cliente {
  id?: number;
  nomeEmpresa?: string;
  cnpj?: string;
  nomeCliente?: string;
  cpfCliente?: string;
  cidade?: Cidade;
  endereco?: string;
  idCidade?: number;


  constructor(
  ) {
  }
}
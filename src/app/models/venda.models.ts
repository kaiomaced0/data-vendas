import { Cliente } from "./cliente.models";
import { ItemVenda } from "./itemVenda.models";

export class Venda {
  
  id?: number;
  cliente?: Cliente;
  observacao?: string;
  valorTotal?: number;
  listaItens?: ItemVenda[];

  constructor(
  ) {
  }
}

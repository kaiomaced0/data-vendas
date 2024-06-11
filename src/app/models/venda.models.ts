import { Cliente } from "./cliente.model";
import { ItemProduto } from "./itemproduto.model";

export class Venda{
  id?: number;
  idCliente?: number;
  observacao?: string;
  valorTotal?: number;
  listaItens?: ItemProduto[];
  cliente?: Cliente;
  quantidadeParcelas?: number;
  intervaloParcelas?: number;
  dataPrimeiraParcela?: Date;

}

import { Categoria } from "./categoria.models";
import { Produto } from "./produto.model";

export class ItemVenda {

  id?: number;
  idProduto?: number;
  produto?: Produto;
  quantidade?: number;
  preco?: number;
  constructor(
  ) {
  }
}

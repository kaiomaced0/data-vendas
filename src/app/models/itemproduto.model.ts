import { Produto } from "./produto.model";

export class ItemProduto{
  id?: number;
  produto?: Produto;
  idProduto?: number;
  quantidade?: number;
  preco?: number;

  constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.idProduto = produto.id;
    this.quantidade = quantidade;
    this.preco = produto.preco! * quantidade;
  }
}

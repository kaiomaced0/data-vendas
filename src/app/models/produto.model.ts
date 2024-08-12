import { Categoria } from "./categoria.models";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  valorCompra?: string;
  preco?: number;
  cor?: string;
  estoque?: number;
  img?: string[];
  categorias?: Categoria[];
  marca?: string;
  idCor?: number;

  constructor(
  ) {
  }
}

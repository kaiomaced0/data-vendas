import { Categoria } from "./categoria.model";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  valorCompra?: number;
  preco?: number;
  cor?: string;
  estoque?: number;
  img?: string[];
  idCor?: number;
  categoriasId?: number[];
  categorias?: Categoria[];
  starts?: number;

  constructor(
  ) {
  }
}

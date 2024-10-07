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
  estoqueMinimo?: number;
  img?: string[];
  categorias?: Categoria[];
  marca?: string;
  idCor?: number;
  codigo?: string;
  codigoBarras?: string;

  constructor(
  ) {
  }
}

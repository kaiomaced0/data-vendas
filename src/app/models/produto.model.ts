import { Categoria } from "./categoria.models";
import { Marca } from "./marca.models";

export class Produto {
  id?: number;
  nome?: string;
  nomeLongo?: string;
  descricao?: string;
  valorCompra?: string;
  preco?: number;
  // cor?: string;
  estoque?: number;
  estoqueMinimo?: number;
  img?: string[];
  categorias?: Categoria[];
  marca?: Marca;
  // idCor?: number;
  codigo?: string;
  codigoBarras?: string;
  idFornecedor?: number;
  idMarca?: number;
  idCategoria?: number;

  constructor(formData: any) {
    this.nome = formData.nome;
    this.nomeLongo = formData.nomeLongo;
    this.descricao = formData.descricao;
    this.estoque = formData.estoque;
    this.valorCompra = formData.valorCompra;
    this.preco = formData.preco;
    this.idFornecedor = formData.idFornecedor;
    this.estoqueMinimo = formData.estoqueMinimo;
    this.idMarca = formData.idMarca;
    this.codigo = formData.codigo;
    this.codigoBarras = formData.codigoBarras;
    this.idCategoria = formData.idCategoria || [];
  }
}

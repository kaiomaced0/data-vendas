import { Cliente } from "./cliente.models";
import { ItemVenda } from "./itemVenda.models";

export class Pagamento {
  
  id?: number;
  idCliente?: number;
  nomeCliente?: string;
  idVenda?: number;
  quantidadeParcelas?: number;
  dataPrimeiraParcela?: Date;
  valor?: number;
  pago?: boolean;

  constructor(
  ) {
  }
}

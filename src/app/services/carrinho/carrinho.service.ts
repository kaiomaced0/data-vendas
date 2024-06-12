import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemProduto } from '../../models/itemproduto.model';
import { Venda } from '../../models/venda.models';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private cartKey = 'cart-data-vendas';
  private venda?: Venda;

  constructor(private snackBar: MatSnackBar) {
    this.loadCart();
  }

  private saveCart(): void {
    this.recalcularValorTotal();
    localStorage.setItem(this.cartKey, JSON.stringify(this.venda));
  }

  private loadCart(): void {
    const cart = localStorage.getItem(this.cartKey);
    if (cart) {
      this.venda = JSON.parse(cart);
    } else {
      this.venda = { listaItens: [], valorTotal: 0 };
    }
  }

  private recalcularValorTotal(): void {
    this.venda!.valorTotal = this.venda!.listaItens?.reduce((total, item) => total + item.preco!, 0) || 0;
  }

  adicionarProduto(produto: Produto, quantidade: number = 1): void {
    this.loadCart();
    const item = this.venda!.listaItens?.find(p => p.idProduto === produto.id);
    if (item) {
      item.quantidade! += quantidade;
      item.preco = produto.preco! * item.quantidade!;
    } else {
      this.venda!.listaItens?.push(new ItemProduto(produto, quantidade));

    }
    this.saveCart();

    this.snackBar.open('Produto adicionado ao carrinho', 'Fechar', {
      duration: 2000,
    });
  }

  aumentarQuantidade(produto: Produto): void {
    this.adicionarProduto(produto, 1);
  }

  diminuirQuantidade(produto: Produto): void {
    this.loadCart();
    const item = this.venda!.listaItens?.find(p => p.idProduto === produto.id);
    if (item && item.quantidade! > 1) {
      item.quantidade!--;
      item.preco = produto.preco! * item.quantidade!;
      this.saveCart();
    } else if (item && item.quantidade === 1) {
      this.removerProduto(produto);
    }
  }

  removerProduto(produto: Produto): void {
    this.loadCart();
    this.venda!.listaItens = this.venda!.listaItens?.filter(p => p.idProduto !== produto.id);
    this.saveCart();
    this.snackBar.open('Produto removido do carrinho', 'Fechar', {
      duration: 2000,
    });
  }

  getCarrinho(): Venda {
    this.loadCart();
    return this.venda!;
  }

  limparCarrinho(): void {
    this.venda = { listaItens: [], valorTotal: 0 };
    this.saveCart();
  }

  enviarCompra(idCliente?: number, observacao?: string, quantidadeParcelas?: number, intervaloParcelas?: number, dataPrimeiraParcela?: Date): Venda {
    this.venda!.idCliente = idCliente;
    this.venda!.observacao = observacao;
    this.venda!.quantidadeParcelas = quantidadeParcelas;
    this.venda!.intervaloParcelas = intervaloParcelas;
    this.venda!.dataPrimeiraParcela = dataPrimeiraParcela;
    this.venda!.valorTotal = this.venda!.listaItens?.reduce((total, item) => total + item.preco!, 0);

    const compraFinalizada = { ...this.venda };
    this.limparCarrinho();
    return compraFinalizada;
  }
}

import { Injectable } from '@angular/core';
import { Venda } from '../../models/venda.models';
import { VendaService } from '../venda/venda.service';
import { ItemVenda } from '../../models/itemVenda.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';
  private cartSubject: BehaviorSubject<Venda | null> = new BehaviorSubject<Venda | null>(null);


  constructor(private router: Router,
    private vendaService: VendaService,
    private snackBar: MatSnackBar) {
    this.loadCart();
  }

  private loadCart(): void {
    const cart = localStorage.getItem(this.storageKey);
    
    // Se o carrinho não existir, cria um carrinho vazio
    if (!cart) {
      const emptyCart = { listaItens: [], valorTotal: 0 }; // Carrinho vazio
      localStorage.setItem(this.storageKey, JSON.stringify(emptyCart));
      this.cartSubject.next(emptyCart); // Notifica o BehaviorSubject com o carrinho vazio
    } else {
      // Se o carrinho já existir, o carrega
      const parsedCart = JSON.parse(cart);
      this.cartSubject.next(parsedCart); // Notifica o BehaviorSubject com o carrinho existente
    }
  }
  

  // Função para visualizar o carrinho
  getCart(): Venda | null {
    const cart = localStorage.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : null;
  }
  getCartObservable(): Observable<Venda | null> {
    return this.cartSubject.asObservable();
  }

  // Função para adicionar um item ao carrinho
  addToCart(idProduto: number, quantidade: number, preco: number): void {
    let cart = this.getCart();

    if (!cart) {
      cart = { listaItens: [], valorTotal: 0 } as Venda;
    }

    // Verificar se o item já existe no carrinho
    const itemExistente = cart.listaItens?.find(item => item.idProduto === idProduto);

    if (itemExistente) {
      itemExistente.quantidade! += quantidade;
      itemExistente.preco = preco;
    } else {
      cart.listaItens!.push({ idProduto, quantidade, preco } as ItemVenda);
    }

    cart.valorTotal = this.calculateTotal(cart);
    this.saveCart(cart);
    this.cartSubject.next(cart);
  }

  // Função para alterar a quantidade de um item no carrinho
  updateQuantity(idProduto: number, quantidade: number): void {
    const cart = this.getCart();
    if (cart) {
      const item = cart.listaItens?.find(i => i.idProduto === idProduto);
      if (item) {
        item.quantidade = quantidade;
        cart.valorTotal = this.calculateTotal(cart);
        this.saveCart(cart);
      }
    }
    this.cartSubject.next(cart)
  }

  // Função para remover um item do carrinho
  removeFromCart(idProduto: number): void {
    const cart = this.getCart();
    if (cart) {
      cart.listaItens = cart.listaItens?.filter(i => i.idProduto !== idProduto);
      cart.valorTotal = this.calculateTotal(cart);
      this.saveCart(cart);
    }
    this.cartSubject.next(cart)
  }

  // Função para excluir (limpar) o carrinho
  clearCart(): void {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/']);
    this.cartSubject.next(this.getCart());
  }

  // Função para concluir a venda (insere no serviço de venda)
  completePurchase(): void {
    const cart = this.getCart();
    if (cart) {
      this.vendaService.insert(cart).subscribe({
        next: () => {
          this.clearCart();

          console.log('Venda concluída com sucesso');

          this.snackBar.open('Venda concluída com sucesso!', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        },
        error: (erro) => {
          console.error('Erro ao concluir a venda:', erro);
          return;
        }
      });
    }
  }
  // Função auxiliar para calcular o valor total do carrinho
  private calculateTotal(cart: Venda): number {
    return cart.listaItens?.reduce((total, item) => {
      return total + (item.preco! * item.quantidade!);
    }, 0) ?? 0;
  }
  // Função para salvar o carrinho no LocalStorage
  private saveCart(cart: Venda): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }  // Função para verificar se o carrinho está vazio

}

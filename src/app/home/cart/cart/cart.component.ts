import { Component, OnInit } from '@angular/core';
import { ItemVenda } from '../../../models/itemVenda.models'; // Modelo ItemVend
import { CartService } from '../../../services/cart/cart.service';
import { Venda } from '../../../models/venda.models';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { CommonModule, NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [FormsModule, MatFormField, CommonModule]
})
export class CartComponent implements OnInit {
  cart: Venda | null = null;

  constructor(private cartService: CartService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Carregar o carrinho do LocalStorage
  loadCart(): void {
    this.cart = this.cartService.getCart();
  }

  // Alterar a quantidade de um item no carrinho
  updateQuantity(item: ItemVenda, quantidade: number): void {
    if (quantidade < 1) return; // Evitar quantidades menores que 1
    this.cartService.updateQuantity(item.idProduto!, quantidade);
    this.loadCart();
  }

  // Remover um item do carrinho
  removeItem(item: ItemVenda): void {
    this.cartService.removeFromCart(item.idProduto!);
    this.loadCart();
    
    this.snackBar.open('Item removido do carrinho!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  // Concluir a compra
  completePurchase(): void {
    this.cartService.completePurchase();
    this.loadCart(); 
  }

  // Limpar o carrinho
  clearCart(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Usuário confirmou a ação
        this.cartService.clearCart();
        this.loadCart();
        
        this.snackBar.open('Carrinho limpo!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    });
  }

  // Função auxiliar para formatar o preço
  formatPrice(value: number): string {
    return `R$ ${value.toFixed(2)}`;
  }
}

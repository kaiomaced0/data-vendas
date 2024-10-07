import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto.model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuantidadeComponent } from '../../../dialog/dialog-quantidade/dialog-quantidade.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, MatTableModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(
      private router: Router,
      private produtoService: ProdutoService,
      private cartService: CartService,
      private dialog: MatDialog) {
  }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.list(1, 1000).subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }
  // Abre o diálogo para inserir a quantidade
  openDialog(produto: any): void {
    const dialogRef = this.dialog.open(DialogQuantidadeComponent, {
      width: '300px',
      data: { nome: produto.nome, preco: produto.preco }
    });

    // Quando o diálogo for fechado, adicione o produto ao carrinho
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.quantidade) {
        this.cartService.addToCart(produto.id, result.quantidade, produto.preco);
      }
    });
  }

  // Abre a página de detalhes do produto
  abrirDetalhes(produto: any): void {
    this.router.navigate([`/produto/${produto.id}`]);
  }

}

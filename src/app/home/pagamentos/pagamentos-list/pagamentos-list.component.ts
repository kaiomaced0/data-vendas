import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamentos-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule],
  templateUrl: './pagamentos-list.component.html',
  styleUrl: './pagamentos-list.component.css'
})
export class PagamentosListComponent {

  constructor(private router: Router) {}

  produtos = [
    { id: 1, nome: 'Produto 1', preco: 100.00, categoria: 'Categoria A', quantidadeEstoque: 10, imageUrl: "https://via.placeholder.com/220x250?text=Produto+1" },
    { id: 2, nome: 'Produto 2', preco: 200.00, categoria: 'Categoria B', quantidadeEstoque: 20,
    imageUrl: "https://via.placeholder.com/220x250?text=Produto+1"},
    // Adicione mais produtos conforme necessário
  ];

  irParaNewPagamentos() {
    this.router.navigate(['pagamentos/new']);
  }
  editarPagamentos(produtoId: number) {
    this.router.navigate(['pagamentos/edit']);
  }

  excluirProduto(produtoId: number) {
    // Lógica para excluir o produto
  }

}

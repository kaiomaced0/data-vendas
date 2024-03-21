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

  pagamentos = [
    { id: 1, cliente: 'Loja 2 - Joao', status: 'Concluido', ValorTotal: '5.000,00', ValorPago: '5.000,00', ValorFaltando: '0,00'},
    { id: 2, cliente: 'Loja 2 - Joao', status: 'Parcial',   ValorTotal: '8.000,00', ValorPago: '2.000,00', ValorFaltando: '6.000,00'}
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

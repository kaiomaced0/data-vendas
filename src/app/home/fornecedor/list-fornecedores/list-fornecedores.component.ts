import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fornecedores',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './list-fornecedores.component.html',
  styleUrl: './list-fornecedores.component.css'
})
export class ListFornecedoresComponent {

  constructor(private router: Router) {}

  fornecedores = [
    { id: 1, nome: 'Fornecedor 1'},
    { id: 2, nome: 'Fornecedor 2'}
  ];

  irParaNewFornecedor() {
    this.router.navigate(['fornecedores/new']);
  }
  editarFornecedor(produtoId: number) {
    this.router.navigate(['fornecedores/edit']);
  }

  excluirProduto(produtoId: number) {
    // Lógica para excluir o produto
  }

}

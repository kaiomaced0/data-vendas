import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendas-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule],
  templateUrl: './vendas-list.component.html',
  styleUrl: './vendas-list.component.css'
})
export class VendasListComponent {

  constructor(private router: Router) {}

  Vendas = [
    { id: 1, nome: 'Venda 1', preco: 100.00, categoria: 'Categoria A', quantidadeEstoque: 10, imageUrl: "https://via.placeholder.com/220x250?text=Venda+1" },
    { id: 2, nome: 'Venda 2', preco: 200.00, categoria: 'Categoria B', quantidadeEstoque: 20,
    imageUrl: "https://via.placeholder.com/220x250?text=Venda+1"},
    // Adicione mais Vendas conforme necessário
  ];

  irParaNewVenda() {
    this.router.navigate(['vendas/new']);
  }
  editarVenda(VendaId: number) {
    this.router.navigate(['vendas/edit']);
  }

  excluirVenda(VendaId: number) {
    // Lógica para excluir o Venda
  }


}

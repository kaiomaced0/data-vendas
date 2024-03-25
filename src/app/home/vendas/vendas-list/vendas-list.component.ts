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
    { id: 1, data: '00/00/0000', valor: 5000.00, cliente: 'João joão', imageUrl: "https://via.placeholder.com/220x250?text=Venda+1" },
    { id: 2, data: '00/00/0000', valor: 8000.00, cliente: 'João joão', imageUrl: "https://via.placeholder.com/220x250?text=Venda+1"},
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

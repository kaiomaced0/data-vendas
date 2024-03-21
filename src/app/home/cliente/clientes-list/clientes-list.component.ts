import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent {

  constructor(private router: Router) {}

  clientes = [
    { id: 1, nome: 'Produto 1', cidade: 'Palmas - TO', ultimaCompra: '00/00/2024', cnpj: '00000000/0001-23'},
    { id: 2, nome: 'Produto 2', cidade: 'Palmas - TO', ultimaCompra: '00/00/2024', cnpj: '00000000/0001-23'},
    // Adicione mais produtos conforme necessário
  ];

  irParaNewCliente() {
    this.router.navigate(['clientes/new']);
  }
  editarCliente(produtoId: number) {
    this.router.navigate(['clientes/edit']);
  }

  excluirProduto(produtoId: number) {
    // Lógica para excluir o produto
  }

}

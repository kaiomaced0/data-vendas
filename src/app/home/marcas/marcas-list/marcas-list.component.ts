import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas-list',
  standalone: true,
  imports: [MatTableModule, MatIcon],
  templateUrl: './marcas-list.component.html',
  styleUrl: './marcas-list.component.css'
})

export class MarcasListComponent {

  constructor(private router: Router) {}

  marcas = [
    { id: 1, nome: 'Marca 1'},
    { id: 2, nome: 'Marca 2'}
  ];

  irParaNewMarca() {
    this.router.navigate(['marcas/new']);
  }
  editarMarca(produtoId: number) {
    this.router.navigate(['marcas/edit']);
  }

  excluirProduto(produtoId: number) {
    // Lógica para excluir o produto
  }

}

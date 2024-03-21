import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule],
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent {


  constructor(private router: Router) {}

  produtos = [
    { id: 1, nome: 'Produto 1', preco: 100.00, categoria: 'Categoria A', quantidadeEstoque: 10, imageUrl: "https://via.placeholder.com/220x250?text=Produto+1" },
    { id: 2, nome: 'Produto 2', preco: 200.00, categoria: 'Categoria B', quantidadeEstoque: 20,
    imageUrl: "https://via.placeholder.com/220x250?text=Produto+1"},
    // Adicione mais produtos conforme necessário
  ];

  irParaNewCategorias() {
    this.router.navigate(['categorias/new']);
  }
  editarCategorias(produtoId: number) {
    this.router.navigate(['categorias/edit']);
  }

}

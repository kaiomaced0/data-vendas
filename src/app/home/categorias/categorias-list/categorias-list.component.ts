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

  categorias = [
    { id: 1, nome: 'Categoria 1'},
    { id: 2, nome: 'Categoria 2'},
  ];

  irParaNewCategorias() {
    this.router.navigate(['categorias/new']);
  }
  editarCategorias(produtoId: number) {
    this.router.navigate(['categorias/edit']);
  }

}

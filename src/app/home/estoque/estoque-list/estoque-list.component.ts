import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-estoque-list',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './estoque-list.component.html',
  styleUrl: './estoque-list.component.css'
})
export class EstoqueListComponent {

  produtos = [
    { id: 1, nome: 'Produto A', estoque: 20 },
    { id: 2, nome: 'Produto B', estoque: 15 }
  ];

  abrirPopup(produto: any): void {

  }
}

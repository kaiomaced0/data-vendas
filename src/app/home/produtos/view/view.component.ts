import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardProdutoComponent } from '../../../components/card-produto/card-produto.component';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto.model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, MatTableModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(private router: Router, private produtoService: ProdutoService) {
  }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.list(1, 1000).subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }

}

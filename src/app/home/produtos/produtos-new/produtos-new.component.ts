import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Produto } from '../../../models/produto.model';
import { Categoria } from '../../../models/categoria.model';
import { ProdutoService } from '../../../services/produto/produto.service';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-produtos-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, HttpClientModule],
  templateUrl: './produtos-new.component.html',
  styleUrl: './produtos-new.component.css'
})
export class ProdutosNewComponent implements OnInit {
  produto: Produto = new Produto();
  categorias: Categoria[] = [];

  cancelar(){
    this.router.navigate(['/produtos']);
  }

  constructor(private router: Router, private service: ProdutoService, private categoriaService: CategoriaService) {

  }
  ngOnInit() {
    this.produto.categoriasId = [];
    this.categoriaService.getAll().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (erro) => {
        console.error('Erro ao carregar categorias', erro);
      }
    });
  }
  adicionarProduto() {
    this.produto!.idCor = 1;
    this.produto!.img = [];
    this.service.insert(this.produto!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/produtos']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar produto:', erro, this.produto!);
      }
    });
  }

}

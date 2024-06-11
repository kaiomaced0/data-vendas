import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoService } from '../../services/produto/produto.service';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    HttpClientModule
  ],
  providers: [ProdutoService, CategoriaService]
})
export class ProdutosModule { }

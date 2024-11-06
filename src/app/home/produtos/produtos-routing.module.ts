import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosViewComponent } from './produtos-view/produtos-view.component';
import { ViewComponent } from './view/view.component';
import { ProdutoService } from '../../services/produto/produto.service';
import { CartService } from '../../services/cart/cart.service';
import { VendaService } from '../../services/venda/venda.service';
import { FormProdutoComponent } from './form-produto/form-produto.component';

const routes: Routes = [
  {path: '', component: ProdutosListComponent},
  {path: 'form/:id', component: FormProdutoComponent},
  {path: 'view', component: ProdutosViewComponent},
  {path: 'all', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProdutoService, CartService, VendaService]
})
export class ProdutosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueListComponent } from './estoque-list/estoque-list.component';
import { EstoqueAddComponent } from './estoque-add/estoque-add.component';
import { ProdutoService } from '../../services/produto/produto.service';

const routes: Routes = [
  {path: '', component: EstoqueListComponent},
  {path: 'add', component: EstoqueAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProdutoService]
})
export class EstoqueRoutingModule { }

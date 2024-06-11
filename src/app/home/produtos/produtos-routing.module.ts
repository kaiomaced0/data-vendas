import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosNewComponent } from './produtos-new/produtos-new.component';
import { ProdutosEditComponent } from './produtos-edit/produtos-edit.component';
import { ProdutosViewComponent } from './produtos-view/produtos-view.component';
import { ViewComponent } from './view/view.component';
import { ProdutoService } from '../../services/produto/produto.service';

const routes: Routes = [
  {path: '', component: ProdutosListComponent},
  {path: 'new', component: ProdutosNewComponent},
  {path: 'edit', component: ProdutosEditComponent},
  {path: 'view', component: ProdutosViewComponent},
  {path: 'all', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProdutoService]
})
export class ProdutosRoutingModule { }

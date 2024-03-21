import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFornecedorComponent } from './edit-fornecedor/edit-fornecedor.component';
import { ListFornecedoresComponent } from './list-fornecedores/list-fornecedores.component';
import { NewFornecedorComponent } from './new-fornecedor/new-fornecedor.component';
import { ViewFornecedorComponent } from './view-fornecedor/view-fornecedor.component';

const routes: Routes = [
  {path: 'edit', component: EditFornecedorComponent},
  {path: '', component: ListFornecedoresComponent},
  {path: 'new', component: NewFornecedorComponent},
  {path: 'view', component: ViewFornecedorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }

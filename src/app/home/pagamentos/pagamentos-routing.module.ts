import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentosListComponent } from './pagamentos-list/pagamentos-list.component';
import { PagamentosEditComponent } from './pagamentos-edit/pagamentos-edit.component';
import { PagamentosNewComponent } from './pagamentos-new/pagamentos-new.component';
import { PagamentosViewComponent } from './pagamentos-view/pagamentos-view.component';
import { PagamentoService } from '../../services/pagamento/pagamento.service';

const routes: Routes = [
  {path: '', component: PagamentosListComponent},
  {path: 'edit', component: PagamentosEditComponent},
  {path: 'new', component: PagamentosNewComponent},
  {path: 'view', component: PagamentosViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PagamentoService]
})
export class PagamentosRoutingModule { }

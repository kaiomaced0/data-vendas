import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasListComponent } from './vendas-list/vendas-list.component';
import { VendasEditComponent } from './vendas-edit/vendas-edit.component';
import { VendasNewComponent } from './vendas-new/vendas-new.component';
import { VendasViewComponent } from './vendas-view/vendas-view.component';
import { VendaService } from '../../services/venda/venda.service';

const routes: Routes = [
  {path: '', component: VendasListComponent},
  {path: 'edit', component: VendasEditComponent},
  {path: 'new', component: VendasNewComponent},
  {path: 'view', component: VendasViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [VendaService]
})
export class VendasRoutingModule { }

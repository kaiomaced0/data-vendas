import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesNewComponent } from './clientes-new/clientes-new.component';
import { ClientesEditComponent } from './clientes-edit/clientes-edit.component';
import { ClientesViewComponent } from './clientes-view/clientes-view.component';
import { ClienteService } from '../../services/cliente/cliente.service';

const routes: Routes = [
  {path: '', component: ClientesListComponent},
  {path: 'new', component: ClientesNewComponent},
  {path: 'edit', component: ClientesEditComponent},
  {path: 'view', component: ClientesViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ClienteService]
})
export class ClienteRoutingModule { }

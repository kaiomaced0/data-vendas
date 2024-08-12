import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasNewComponent } from './categorias-new/categorias-new.component';
import { CategoriasEditComponent } from './categorias-edit/categorias-edit.component';
import { CategoriasViewComponent } from './categorias-view/categorias-view.component';
import { CategoriaService } from '../../services/categoria/categoria.service';

const routes: Routes = [
  {path: '', component: CategoriasListComponent},
  {path: 'new', component: CategoriasNewComponent},
  {path: 'edit', component: CategoriasEditComponent},
  {path: 'view', component: CategoriasViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoriaService]
})
export class CategoriasRoutingModule { }

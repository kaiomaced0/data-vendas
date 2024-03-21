import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasListComponent } from './marcas-list/marcas-list.component';
import { MarcasEditComponent } from './marcas-edit/marcas-edit.component';
import { MarcasNewComponent } from './marcas-new/marcas-new.component';
import { MarcasViewComponent } from './marcas-view/marcas-view.component';

const routes: Routes = [
  {path: '', component: MarcasListComponent},
  {path: 'edit', component: MarcasEditComponent},
  {path: 'new', component: MarcasNewComponent},
  {path: 'view', component: MarcasViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }

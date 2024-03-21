import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosModule } from './produtos/produtos.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'produtos',
    children: [
      {
        path: '',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
      },
    ]
  },
  {
    path: 'clientes',
    children: [
      {
        path: '',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

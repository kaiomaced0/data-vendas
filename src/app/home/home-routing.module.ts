import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
  },
  {
    path: 'vendas',
    children: [
      {
        path: '',
        loadChildren: () => import('./vendas/vendas.module').then(m => m.VendasModule)
      },
    ]
  },
  {
    path: 'pagamentos',
    children: [
      {
        path: '',
        loadChildren: () => import('./pagamentos/pagamentos.module').then(m => m.PagamentosModule)
      },
    ]
  },
  {
    path: 'categorias',
    children: [
      {
        path: '',
        loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
      },
    ]
  },
  {
    path: 'estoques',
    children: [
      {
        path: '',
        loadChildren: () => import('./estoque/estoque.module').then(m => m.EstoqueModule)
      },
    ]
  },
  {
    path: 'marcas',
    children: [
      {
        path: '',
        loadChildren: () => import('./marcas/marcas.module').then(m => m.MarcasModule)
      },
    ]
  },
  {
    path: 'fornecedores',
    children: [
      {
        path: '',
        loadChildren: () => import('./fornecedor/fornecedor.module').then(m => m.FornecedorModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

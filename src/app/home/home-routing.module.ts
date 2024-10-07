import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'produto',
    children: [
      {
        path: '',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
      },
    ]
  },
  {
    path: 'cliente',
    children: [
      {
        path: '',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
      },
    ]
  },
  {
    path: 'venda',
    children: [
      {
        path: '',
        loadChildren: () => import('./vendas/vendas.module').then(m => m.VendasModule)
      },
    ]
  },
  {
    path: 'pagamento',
    children: [
      {
        path: '',
        loadChildren: () => import('./pagamentos/pagamentos.module').then(m => m.PagamentosModule)
      },
    ]
  },
  {
    path: 'categoria',
    children: [
      {
        path: '',
        loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
      },
    ]
  },
  {
    path: 'estoque',
    children: [
      {
        path: '',
        loadChildren: () => import('./estoque/estoque.module').then(m => m.EstoqueModule)
      },
    ]
  },
  {
    path: 'marca',
    children: [
      {
        path: '',
        loadChildren: () => import('./marcas/marcas.module').then(m => m.MarcasModule)
      },
    ]
  },
  {
    path: 'fornecedor',
    children: [
      {
        path: '',
        loadChildren: () => import('./fornecedor/fornecedor.module').then(m => m.FornecedorModule)
      },
    ]
  },
  {
    path: 'conta',
    children: [
      {
        path: '',
        loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
      },
    ]
  },
  {
    path: 'carrinho',
    children: [
      {
        path: '',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

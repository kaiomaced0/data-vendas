import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { VendaService } from '../../services/venda/venda.service';

const routes: Routes = [
  {path: '', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CartService, VendaService]
})
export class CartRoutingModule { }

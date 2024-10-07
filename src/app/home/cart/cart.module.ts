import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule
  ]
})
export class CartModule { }

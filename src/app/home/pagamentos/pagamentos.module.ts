import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentosRoutingModule } from './pagamentos-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagamentosRoutingModule,
    HttpClientModule
  ]
})
export class PagamentosModule { }

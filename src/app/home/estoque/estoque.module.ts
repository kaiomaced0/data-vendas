import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    HttpClientModule
  ]
})
export class EstoqueModule { }

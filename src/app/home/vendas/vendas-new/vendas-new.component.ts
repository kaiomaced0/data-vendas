import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Produto } from '../../../models/produto.model';
import { ProdutoService } from '../../../services/produto/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemProduto } from '../../../models/itemproduto.model';
import { ProdutoDialogComponent } from '../../../components/produto-dialog/produto-dialog.component';
import { VendaDialogComponent } from '../../../components/venda-dialog/venda-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Venda } from '../../../models/venda.models';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-vendas-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatAutocompleteModule, MatButton, ReactiveFormsModule, AsyncPipe, MatInput],
  templateUrl: './vendas-new.component.html',
  styleUrl: './vendas-new.component.css'
})
export class VendasNewComponent implements OnInit {
  produtos: Produto[] = [];
  itemProdutos: ItemProduto[] = [];
  venda: Venda = new Venda();
  listaNomes: string[] = [];
  myControl?: string = '';
  filteredOptions?: string[];
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;


  constructor(private produtoService: ProdutoService, public dialog: MatDialog) { }

  filter(): void {
    const filterValue = this.input!.nativeElement.value.toLowerCase();
    this.filteredOptions = this.listaNomes.filter(o => o.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    this.venda.valorTotal = 0;
    this.produtoService.list().subscribe(data => {
      this.produtos = data;
      data.forEach(element => {
        this.listaNomes.push(element.nome!);
      });
    });
    this.filteredOptions = this.listaNomes.slice();}

    addProduto(p:Produto){

      this.itemProdutos.push(new ItemProduto(p, 1));
      console.log(this.itemProdutos);
    }


}

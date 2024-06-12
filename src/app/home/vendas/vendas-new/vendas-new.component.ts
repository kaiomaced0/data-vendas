import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Produto } from '../../../models/produto.model';
import { ProdutoService } from '../../../services/produto/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemProduto } from '../../../models/itemproduto.model';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Venda } from '../../../models/venda.models';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { CarrinhoService } from '../../../services/carrinho/carrinho.service';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DialogProdutoVendaComponent } from '../../../components/dialog/dialog-produto-venda/dialog-produto-venda/dialog-produto-venda.component';

@Component({
  selector: 'app-vendas-new',
  standalone: true,
  imports: [HttpClientModule, FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatAutocompleteModule, MatButton, ReactiveFormsModule, AsyncPipe, MatInput, MatIcon, DialogProdutoVendaComponent],
  templateUrl: './vendas-new.component.html',
  styleUrl: './vendas-new.component.css'
})
export class VendasNewComponent implements OnInit {
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];
  itemProdutos: ItemProduto[] = [];
  myControl?: string = '';
  listaNomes: string[] = [];
  filteredOptions?: string[];
  venda?: Venda;
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;


  constructor(private produtoService: ProdutoService, public dialog: MatDialog, private carrinhoService: CarrinhoService, private snackBar: MatSnackBar, private router: Router) {
    console.log(this.carrinhoService.getCarrinho());}

  filter(): void {
    const filterValue = this.input!.nativeElement.value.toLowerCase();
    this.filteredOptions = this.listaNomes.filter(o => o.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    this.produtoService.list().subscribe(data => {
      console.log(this.carrinhoService.getCarrinho());
      this.produtos = data;
      this.filteredProdutos = data;
      data.forEach(element => {
        this.listaNomes.push(element.nome!);
      });
      this.getCarrinho();
    });
    this.filteredOptions = this.listaNomes.slice();}


  filterProdutos() {
    this.filteredProdutos = this.produtos.filter(produto =>
      produto.nome!.toLowerCase().includes(this.myControl!.toLowerCase()) ||
      produto.descricao!.toLowerCase().includes(this.myControl!.toLowerCase())
    );
  }

  onOptionSelected(produto: Produto) {
    this.carrinhoService.adicionarProduto(produto);
    this.getCarrinho();
    console.log(this.carrinhoService.getCarrinho());
  }

  diminuir(produto: Produto){
    this.carrinhoService.diminuirQuantidade(produto);
    this.getCarrinho();
  }

  getCarrinho(){
    this.venda = this.carrinhoService.getCarrinho();
  }

  limpar(){

    const dialogRef = this.dialog.open(DialogProdutoVendaComponent, {
      width: '300px',
      data: {
        titulo: 'Limpar Pedido',
        message: `Tem certeza que deseja Limpar os dados do Pedido?`,
      }});

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.carrinhoService.limparCarrinho();
          this.getCarrinho();
        }
      });
  }

  finalizeVenda(): void {
    const venda = this.carrinhoService.getCarrinho();

    const dialogRef = this.dialog.open(DialogProdutoVendaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Produto de nome: ?`,
      }});

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

        const compraFinalizada = this.carrinhoService.enviarCompra(
          venda.idCliente,
          venda.observacao,
          venda.quantidadeParcelas,
          venda.intervaloParcelas,
          venda.dataPrimeiraParcela
        );
        console.log('Compra finalizada:', compraFinalizada);
        this.snackBar.open('Produto deletado', 'Fechar', {
          duration: 2000,
        });
        }
      });
  }

}

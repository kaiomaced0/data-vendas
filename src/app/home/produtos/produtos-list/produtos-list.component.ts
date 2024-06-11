import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto.model';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule, HttpClientModule],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.css'
})
export class ProdutosListComponent implements OnInit{
  constructor(private router: Router, private produtoService: ProdutoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.list().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/produtos/edit/${id}`]);
  }

  irParaNewProduto() {
    this.router.navigate(['/produtos/new']);
  }


  deletar(id:number, nome:string){
    //usar dialog material

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.produtoService.delete(id).subscribe({
    //       next: () => {
    //         this.snackBar.open('Produto deletado', 'Fechar', {
    //           duration: 2000,
    //         });
    //         this.ngOnInit();
    //       },
    //       error: (error) => {
    //         this.snackBar.open('Erro ao deletar Produto', 'Fechar', {
    //           duration: 1000,
    //         });
    //       }
    //     });
    //   }
    // });
    }

}

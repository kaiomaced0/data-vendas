import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Produto } from '../../../models/produto.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';
import { ProdutoService } from '../../../services/produto/produto.service';
import { withFetch } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule, MatPaginatorModule],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.css'
})
export class ProdutosListComponent implements OnInit{

  constructor(private router: Router, private produtoService: ProdutoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  pageSize = 20;
  page = 1;
  totalRecords = 0;
  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.list(this.page, this.pageSize).subscribe((data: Produto[]) => {
      this.produtos = data;
    });
    this.produtoService.listSize().subscribe((data: number) => {
      this.totalRecords = data;
    })
  }
  editar(id:number) {
    this.router.navigate([`/produto/form/${id}`]);
  }

  irParaNewProduto() {
    this.router.navigate(['/produto/form/']);
  }

  paginar(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }

  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Produto de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.produtoService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Produto deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Produto', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }

}

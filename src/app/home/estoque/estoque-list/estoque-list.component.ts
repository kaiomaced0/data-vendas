import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ProdutoService } from '../../../services/produto/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from '../../../models/produto.model';
import { Router } from '@angular/router';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-estoque-list',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './estoque-list.component.html',
  styleUrl: './estoque-list.component.css'
})
export class EstoqueListComponent implements OnInit {

  constructor(private router: Router, private produtoService: ProdutoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  produtos: Produto[] = [];

  ngOnInit() {
    // this.produtoService.list().subscribe((data: Produto[]) => {
    //   this.produtos = data;
    // });
  }
  editar(id:number) {
    this.router.navigate([`/produtos/edit/${id}`]);
  }

  irParaNewProduto() {
    this.router.navigate(['/produtos/new']);
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

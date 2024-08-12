import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { VendaService } from '../../../services/venda/venda.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Venda } from '../../../models/venda.models';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendas-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule],
  templateUrl: './vendas-list.component.html',
  styleUrl: './vendas-list.component.css'
})
export class VendasListComponent implements OnInit {
  

  constructor(private router: Router, private vendaService: VendaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  vendas: Venda[] = [];

  ngOnInit() {
    this.vendaService.list().subscribe((data: Venda[]) => {
      this.vendas = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/vendas/edit/${id}`]);
  }

  irParaNewvenda() {
    this.router.navigate(['/vendas/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o venda de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vendaService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('venda deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar venda', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }


}

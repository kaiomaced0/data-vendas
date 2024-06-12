import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { VendaService } from '../../../services/venda/venda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Venda } from '../../../models/venda.models';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-vendas-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule, HttpClientModule, MatDatepicker],
  templateUrl: './vendas-list.component.html',
  styleUrl: './vendas-list.component.css'
})
export class VendasListComponent implements OnInit{

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

  irParaNewVenda() {
    this.router.navigate(['/vendas/new']);
  }


  deletar(id:number, nome:string){
    //usar dialog material

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.VendaService.delete(id).subscribe({
    //       next: () => {
    //         this.snackBar.open('Venda deletado', 'Fechar', {
    //           duration: 2000,
    //         });
    //         this.ngOnInit();
    //       },
    //       error: (error) => {
    //         this.snackBar.open('Erro ao deletar Venda', 'Fechar', {
    //           duration: 1000,
    //         });
    //       }
    //     });
    //   }
    // });
    }

}

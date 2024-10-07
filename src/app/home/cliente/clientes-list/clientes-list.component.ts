import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../../models/cliente.models';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule, MatPaginator],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit{

  constructor(private router: Router, private clienteService: ClienteService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  clientes: Cliente[] = [];

  pageSize = 20;
  page = 1;
  totalRecords = 0;
  ngOnInit() {
    this.clienteService.list(this.page, this.pageSize).subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
    this.clienteService.listSize().subscribe((data: number) => {
      this.totalRecords = data;
    })
  }
  editar(id:number) {
    this.router.navigate([`/cliente/edit/${id}`]);
  }

  irParaNewCliente() {
    this.router.navigate(['/cliente/new']);
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
        message: `Tem certeza que deseja Deletar o Cliente de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clienteService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Cliente deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Cliente', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }
}

import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../../models/cliente.model';


@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule, HttpClientModule],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clienteService.list().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/clientes/edit/${id}`]);
  }

  irParaNewCliente() {
    this.router.navigate(['/clientes/new']);
  }


  deletar(id:number, nome:string){
    //usar dialog material

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.ClienteService.delete(id).subscribe({
    //       next: () => {
    //         this.snackBar.open('Cliente deletado', 'Fechar', {
    //           duration: 2000,
    //         });
    //         this.ngOnInit();
    //       },
    //       error: (error) => {
    //         this.snackBar.open('Erro ao deletar Cliente', 'Fechar', {
    //           duration: 1000,
    //         });
    //       }
    //     });
    //   }
    // });
    }

}

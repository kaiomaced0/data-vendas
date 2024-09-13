import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MarcaService } from '../../../services/marca/marca.service';
import { Marca } from '../../../models/marca.models';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-marcas-list',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatPaginatorModule],
  templateUrl: './marcas-list.component.html',
  styleUrl: './marcas-list.component.css'
})

export class MarcasListComponent implements OnInit {

  constructor(private router: Router, private marcaService: MarcaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  marcas: Marca[] = [];


  pageSize = 20;
  page = 1;
  totalRecords = 0;

  ngOnInit() {
    this.marcaService.list(this.page, this.pageSize).subscribe((data: Marca[]) => {
      this.marcas = data;
    });
    this.marcaService.listSize().subscribe((data: number) => {
      this.totalRecords = data;
    })
  }


  paginar(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }
  editar(id:number) {
    this.router.navigate([`/marcas/edit/${id}`]);
  }

  irParaNewmarca() {
    this.router.navigate(['/marcas/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o marca de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.marcaService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('marca deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar marca', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }


}

import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria.models';
import { DialogConfirmComponent } from '../../../dialog/dialog-confirm/dialog-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule],
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent implements OnInit{

  constructor(private router: Router, private categoriaService: CategoriaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  categorias: Categoria[] = [];

  ngOnInit() {
    this.categoriaService.list().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/categorias/edit/${id}`]);
  }

  irParaNewcategoria() {
    this.router.navigate(['/categorias/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o categoria de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoriaService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('categoria deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar categoria', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }

}

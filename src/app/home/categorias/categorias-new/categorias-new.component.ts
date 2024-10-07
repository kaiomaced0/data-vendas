import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Categoria } from '../../../models/categoria.models';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-categorias-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption],
  templateUrl: './categorias-new.component.html',
  styleUrl: './categorias-new.component.css'
})
export class CategoriasNewComponent implements OnInit {
  categoria: Categoria = new Categoria();

  cancelar() {
    this.router.navigate(['/admin/categorias']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CategoriaService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {}

  adicionarCategoria() {
    this.service.insert(this.categoria).subscribe({
      next: (categoriaAdicionada) => {
        console.log('Categoria adicionada com sucesso:', categoriaAdicionada);
        this.router.navigate(['/categoria']);

        this.snackBar.open('Categoria adicionada', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar categoria:', erro);
        this.snackBar.open('Erro ao adicionar Categoria', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }
}

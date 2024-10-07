import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../models/produto.model';
import { Categoria } from '../../../models/categoria.models';
import { Marca } from '../../../models/marca.models';
import { ProdutoService } from '../../../services/produto/produto.service';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { MarcaService } from '../../../services/marca/marca.service';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, NgIf, MatProgressBar],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  marcas: Marca[] = [];
  selectedFiles: FileList | null = null;
  img: string[] = [];
  uploadPercent: number | undefined;

  cancelar() {
    this.router.navigate(['/admin/produtos']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProdutoService,
    private snackBar: MatSnackBar) {

  }
  ngOnInit() {
  }


  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  addImage(imageUrl: string) {
    this.img.push(imageUrl);
  }

  removeImage(imageUrl: string) {
    this.img = this.img.filter(image => image !== imageUrl);
  }


  adicionarProduto() {
    // this.produto!.img = this.img;
    this.service.insert(this.produto!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/produto']);

        this.snackBar.open('Produto adicionado', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar produto:', erro, this.produto!);
        this.snackBar.open('Erro ao adicionar Produto', 'Fechar', {
          duration: 2000,
        });
      }
    });

  }
}

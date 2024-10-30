import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location, NgFor, NgIf } from '@angular/common';
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
  imports: [FormsModule, MatFormFieldModule, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, NgIf, MatProgressBar, NgFor],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent implements OnInit {

  selectedFiles: FileList | null = null;
  img: string[] = [];
  uploadPercent: number | undefined;
  productForm?: FormGroup;
  productData?: Produto;
  categories: Categoria[] = [
    { id: 1, nome: 'Eletrônicos' },
    { id: 2, nome: 'Roupas' },
    { id: 3, nome: 'Alimentos' },
    { id: 4, nome: 'Livros' }
    // Adicione mais categorias conforme necessário
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private service: ProdutoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nome: ['', Validators.required],
      nomeLongo: ['', Validators.required],
      descricao: [''],
      estoque: [, [Validators.required, Validators.min(0)]],
      valorCompra: [null, [Validators.required, Validators.min(0)]],
      preco: [null, [Validators.required, Validators.min(0)]],
      idFornecedor: [null, Validators.required],
      estoqueMinimo: [null, [Validators.required, Validators.min(0)]],
      idMarca: [null, Validators.required],
      codigo: [''],
      codigoBarras: [''],
      idCategoria: this.fb.array([], Validators.required),  // Usando FormArray para categorias
    });
  }

  // Getter para facilitar o acesso ao FormArray de categorias
  get idCategoria(): FormArray {
    return this.productForm!.get('idCategoria') as FormArray;
  }

  // Método para adicionar/remover categoria ao FormArray
  onCategoryChange(categoryId: number, isChecked: boolean): void {
    if (isChecked) {
      this.idCategoria.push(this.fb.control(categoryId));
    } else {
      const index = this.idCategoria.controls.findIndex(
        (control) => control.value === categoryId
      );
      if (index >= 0) {
        this.idCategoria.removeAt(index);
      }
    }
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

  voltarPagina(): void {
      this.location.back();
  }

  onSubmit(): void {
    if (this.productForm!.valid) {
      this.productData = new Produto(this.productForm!.value);
      console.log('Dados do Produto:', this.productData);

      this.service.insert(this.productData!).subscribe({
        next: (produtoAdicionado) => {
          console.log('Produto adicionado com sucesso:', produtoAdicionado);
          this.router.navigate(['/produto']);
  
          this.snackBar.open('Produto adicionado', 'Fechar', {
            duration: 3000,
          });
        },
        error: (erro) => {
          console.error('Erro ao adicionar produto:', erro, this.productData!);
          this.snackBar.open('Erro ao adicionar Produto', 'Fechar', {
            duration: 3000,
          });
        }
      });
    } else {
      this.snackBar.open('Campos não preenchidos!', 'Fechar', {
        duration: 3000,
      });
    }
  }
}

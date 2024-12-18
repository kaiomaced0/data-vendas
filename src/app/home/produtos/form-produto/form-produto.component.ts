import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location, NgFor, NgIf } from '@angular/common';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Produto } from '../../../models/produto.model';
import { Categoria } from '../../../models/categoria.models';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-form-produto',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, NgIf, MatProgressBar, NgFor],
  templateUrl: './form-produto.component.html'
})
export class FormProdutoComponent implements OnInit {
  selectedFiles: FileList | null = null;
  img: File[] = [];
  uploadPercent: number | undefined;
  productForm?: FormGroup;
  productData?: Produto;
  categories?: Categoria[];
  selectedCategories: (number | undefined)[] = [];
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private service: ProdutoService,
    private location: Location,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

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
      idMarca: [null],
      codigo: [''],
      codigoBarras: [''],
      idCategoria: this.fb.array([]),
      img: this.fb.array([])
    });
    this.loadCategories();

    // Verificar se estamos em modo de edição
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.loadProductData();
      }
    });
  }


  loadCategories(): void {
    this.categoriaService.list(1, 500).subscribe((categorias: Categoria[]) => {
      this.categories = categorias;
    });
  }

  loadProductData(): void {
    this.service.getById(this.productId!).subscribe((produto: Produto) => {
      this.productForm!.patchValue(produto);

      // Preenche o FormArray de categorias com os IDs correspondentes
      const idCategoriaArray = this.productForm!.get('idCategoria') as FormArray;
      this.selectedCategories = produto.categorias!.map(cat => cat.id); // Pega os IDs das categorias
      this.selectedCategories.forEach(id => {
        idCategoriaArray.push(this.fb.control(id)); // Adiciona cada ID ao FormArray
      });
    });
  }

  get categoriasArray(): FormArray {
    return this.productForm!.get('categorias') as FormArray;
  }

  get idCategoria(): FormArray {
    return this.productForm!.get('idCategoria') as FormArray;
  }

  onCategoryChange(category: Categoria, isChecked: boolean): void {
    const categoriasArray = this.categoriasArray;

    if (isChecked) {
      categoriasArray.push(this.fb.control(category));
    } else {
      const index = categoriasArray.controls.findIndex(
        (control) => control.value.id === category.id
      );
      if (index >= 0) {
        categoriasArray.removeAt(index);
      }
    }
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  addImage(imageUrl: File) {
    this.img.push(imageUrl);
  }

  removeImage(imageUrl: File) {
    this.img = this.img.filter(image => image !== imageUrl);
  }

  voltarPagina(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.productForm!.valid) {
      
      this.productData = new Produto(this.productForm!.value);

      if (this.productId) {
        // Modo de edição: chama update
        this.service.update(this.productId, this.productData!).subscribe({
          next: () => {
            this.snackBar.open('Produto atualizado', 'Fechar', {
              duration: 3000,
            });
            this.router.navigate(['/produto']);
          },
          error: (erro) => {
            console.error('Erro ao atualizar produto:', erro);
            this.snackBar.open('Erro ao atualizar Produto', 'Fechar', {
              duration: 3000,
            });
          }
        });
      } else {
        // Modo de adição: chama insert
        this.service.insert(this.productData!).subscribe({
          next: (produtoAdicionado) => {
            this.snackBar.open('Produto adicionado', 'Fechar', {
              duration: 3000,
            });
            this.router.navigate(['/produto']);
          },
          error: (erro) => {
            console.error('Erro ao adicionar produto:', erro);
            this.snackBar.open('Erro ao adicionar Produto', 'Fechar', {
              duration: 3000,
            });
          }
        });
      }
    } else {
      this.snackBar.open('Campos não preenchidos!', 'Fechar', {
        duration: 3000,
      });
    }
  }
}

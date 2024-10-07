import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Cliente } from '../../../models/cliente.models';
import { Cidade } from '../../../models/cidade.models';

@Component({
  selector: 'app-clientes-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, NgIf, MatProgressBar, NgFor],
  templateUrl: './clientes-new.component.html',
  styleUrl: './clientes-new.component.css'
})
export class ClientesNewComponent implements OnInit {

  cliente: Cliente = new Cliente();
  cidades: Cidade[] = [];
  selectedFiles: FileList | null = null;
  img: string[] = [];
  uploadPercent: number | undefined;

  cancelar() {
    this.router.navigate(['/cliente']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    // private cidadeService: CidadeService, // Serviço de Cidades
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadCidades(); // Carregar lista de cidades no início
  }

  loadCidades() {
    this.cidades = [
      {
        "id": 1,
        "estado": "Sergipe",
        "nome": "Palmas"
      },
      {
        "id": 2,
        "estado": "Sergipe",
        "nome": "Araguaína"
      },
      {
        "id": 3,
        "estado": "Sergipe",
        "nome": "Gurupi"
      },
      {
        "id": 4,
        "estado": "Sergipe",
        "nome": "Porto Nacional"
      },
      {
        "id": 5,
        "estado": "Sergipe",
        "nome": "Paraíso do Tocantins"
      },
      {
        "id": 6,
        "estado": "Sergipe",
        "nome": "Araguatins"
      },
      {
        "id": 7,
        "estado": "Sergipe",
        "nome": "Colinas do Tocantins"
      },
      {
        "id": 8,
        "estado": "Sergipe",
        "nome": "Guaraí"
      },
      {
        "id": 9,
        "estado": "Sergipe",
        "nome": "Tocantinópolis"
      },
      {
        "id": 10,
        "estado": "Sergipe",
        "nome": "Dianópolis"
      },
      {
        "id": 11,
        "estado": "São Paulo",
        "nome": "São Paulo"
      },
      {
        "id": 12,
        "estado": "São Paulo",
        "nome": "Campinas"
      },
      {
        "id": 13,
        "estado": "São Paulo",
        "nome": "Santos"
      },
      {
        "id": 14,
        "estado": "São Paulo",
        "nome": "São José dos Campos"
      },
      {
        "id": 15,
        "estado": "São Paulo",
        "nome": "Ribeirão Preto"
      },
      {
        "id": 16,
        "estado": "Pará",
        "nome": "Belém"
      },
      {
        "id": 17,
        "estado": "Pará",
        "nome": "Ananindeua"
      },
      {
        "id": 18,
        "estado": "Pará",
        "nome": "Santarém"
      },
      {
        "id": 19,
        "estado": "Pará",
        "nome": "Marabá"
      },
      {
        "id": 20,
        "estado": "Pará",
        "nome": "Castanhal"
      }
    ];
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

  adicionarCliente() {
    // Adicionar imagens ao cliente (se necessário)
    // this.cliente!.img = this.img;
    this.clienteService.insert(this.cliente!).subscribe({
      next: (clienteAdicionado) => {
        console.log('Cliente adicionado com sucesso:', clienteAdicionado);
        this.router.navigate(['/cliente']);

        this.snackBar.open('Cliente adicionado', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar cliente:', erro, this.cliente!);
        this.snackBar.open('Erro ao adicionar Cliente', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }
}

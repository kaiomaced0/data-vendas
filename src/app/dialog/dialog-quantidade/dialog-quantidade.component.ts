import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-quantidade',
  imports: [MatFormField, MatLabel, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './dialog-quantidade.component.html',
  styleUrl: './dialog-quantidade.component.css'
})
export class DialogQuantidadeComponent {
  quantidade: number = 1;
  valorTotal: number;

  constructor(
    public dialogRef: MatDialogRef<DialogQuantidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nome: string; preco: number }
  ) {
    this.valorTotal = this.data.preco * this.quantidade;
  }

  // Atualiza o valor total quando a quantidade muda
  onQuantidadeChange(): void {
    // Garantir que a quantidade seja sempre no mínimo 1
    if (this.quantidade < 1) {
      this.quantidade = 0;
    }
    this.valorTotal = this.quantidade * this.data.preco;
  }

  // Fechar o diálogo e retornar os dados
  adicionar(): void {
    this.dialogRef.close({ quantidade: this.quantidade });
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}

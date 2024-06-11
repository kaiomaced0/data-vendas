import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../models/produto.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, FormsModule,],
  templateUrl: './produto-dialog.component.html',
  styleUrl: './produto-dialog.component.css'
})
export class ProdutoDialogComponent {

  quantidade: number = 1;

  constructor(
    public dialogRef: MatDialogRef<ProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { produto: Produto }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close({ quantidade: this.quantidade });
  }
}

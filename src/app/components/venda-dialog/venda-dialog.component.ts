import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemProduto } from '../../models/itemproduto.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-venda-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './venda-dialog.component.html',
  styleUrl: './venda-dialog.component.css'
})
export class VendaDialogComponent {
  descricao: string = '';
  quantidadeParcelas: number = 1;
  intervaloParcelas: number = 1;
  dataPrimeiraParcela: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<VendaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { itemProdutos: ItemProduto[], valorTotal: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close({
      descricao: this.descricao,
      quantidadeParcelas: this.quantidadeParcelas,
      intervaloParcelas: this.intervaloParcelas,
      dataPrimeiraParcela: this.dataPrimeiraParcela
    });
  }

}

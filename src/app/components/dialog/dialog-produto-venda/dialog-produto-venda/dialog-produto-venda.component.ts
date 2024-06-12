import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-produto-venda',
  standalone: true,
  imports: [MatDialogModule, MatSnackBarModule, MatButton],
  templateUrl: './dialog-produto-venda.component.html',
  styleUrl: './dialog-produto-venda.component.css'
})
export class DialogProdutoVendaComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogProdutoVendaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


}

import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css'
})
export class DialogConfirmComponent {


  constructor(private dialogRef: MatDialogRef<DialogConfirmComponent>) {}

  confirm(): void {
    this.dialogRef.close(true); // Retorna "true" para indicar a confirmação
  }

  cancel(): void {
    this.dialogRef.close(false); // Retorna "false" para indicar o cancelamento
  }
}

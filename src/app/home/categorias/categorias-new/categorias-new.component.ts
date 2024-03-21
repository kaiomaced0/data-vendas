import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorias-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption],
  templateUrl: './categorias-new.component.html',
  styleUrl: './categorias-new.component.css'
})
export class CategoriasNewComponent {

  constructor(private router: Router) {}

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarCategoria() {
    this.router.navigate(['/categorias']);
  }
}

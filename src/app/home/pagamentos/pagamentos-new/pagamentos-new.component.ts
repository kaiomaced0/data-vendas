import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamentos-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption],
  templateUrl: './pagamentos-new.component.html',
  styleUrl: './pagamentos-new.component.css'
})
export class PagamentosNewComponent {
  constructor(private router: Router) {}
  categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'];

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarProduto() {
    this.router.navigate(['/produtos']);
  }


}

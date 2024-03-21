import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clientes-new',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption],
  templateUrl: './clientes-new.component.html',
  styleUrl: './clientes-new.component.css'
})
export class ClientesNewComponent {
  constructor(private router: Router) {}
  cidades = ['Palmas - TO', 'Paraiso - TO', 'Araguaina - TO'];

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
  }
  adicionarCliente() {
    this.router.navigate(['/clientes']);
  }


}

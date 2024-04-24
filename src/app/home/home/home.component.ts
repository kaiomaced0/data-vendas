import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {ChartModule} from 'primeng/chart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, MatButtonModule, MatDividerModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
    this.data = {
      labels: ['January', 'February', 'March'],
      datasets: [
          {
              label: 'Vendas do mês',
              backgroundColor: '#42A5F5',
              data: [20000, 19300, 32000]
          }
      ]
  }
  this.data2 = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };

    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJnaXJhZmZ1cy1qd3QiLCJncm91cHMiOlsiQWRtaW4iXSwic3ViIjoia2FpbyIsImV4cCI6MTczMTIwMDk4NywiaWF0IjoxNzEzOTIwOTg3LCJqdGkiOiJiN2Q2NTUxZi04ZWU0LTQzNjQtYjlhMi1kOTgzYWIzY2M2MGQifQ.saHz-CUqvrk3L0NbQQ9DpNxkeK_hZJoaiXTe8QsdQsJG5yAMqdulR_3cBE0jkkyEpBxLeSCq-drc3lxaSx5ZCHMeJzzaua8_DKENj35c0f7t7UybJfEslNsz4CtSfuEnW9U1R7KZngaySOMHtd9xTLTHI2W9lX7k6YgVp4QR0RV8HQBk9xlLp3pK3e2zds8pCYKdpBg4tgQZ3Wj4weXIDi9EAGFi7CK_AFmOgzPJZjnay4dDRgXjFZQJh-vwjTuup_G2D4o4gLlwv0j-l-VkLtFAIefPAYMloD08Ixm3ENRnlEarjYKANTuW9XQvRKMFOtYGPxhdTTJotP09uy1NyA')

  }

  telaProdutos() {
    this.router.navigate(['produtos']);
  }
  telaClientes() {
    this.router.navigate(['clientes']);
  }
  telaVendas() {
    this.router.navigate(['vendas']);
  }
  telaPagamentos() {
    this.router.navigate(['pagamentos']);
  }
  telaCategorias() {
    this.router.navigate(['categorias']);
  }
  telaEstoques() {
    this.router.navigate(['estoques']);
  }
  telaMarcas() {
    this.router.navigate(['marcas']);
  }
  telaFornecedores() {
    this.router.navigate(['fornecedores']);
  }
  telaVisualizarAllProdutos() {
    this.router.navigate(['produtos/all']);
  }
  telaNewVenda() {
    this.router.navigate(['vendas/new']);
  }

  data: any;
  data2: any;
}

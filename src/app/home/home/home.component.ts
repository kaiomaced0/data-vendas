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

    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJnaXJhZmZ1cy1qd3QiLCJzdWIiOiJrYWlvIiwiZ3JvdXBzIjpbIkFkbWluIl0sImV4cCI6MTc4ODc2ODQ5MCwiaWF0IjoxNzI1Njk2NDkwLCJqdGkiOiI3ZjI5NWFlZS05ZjRjLTQ2ZWItYTAzNi04ZWQ0ZDM1YjljMGEifQ.D4wfKwX15G8AxEtXQtQwulZBRyfxQPUtN9dfihihMHsyHW5_a1fsy0QrGJq2YfxTKURi1eJsHXIpDoZk8PdWeTeZz2PGr5-MY1q2JLcZA6_ffk1Y15EmMEJl6o0gxAnixHc6PUhVabuxWvOOv7kICFJEEOWfUpkKpdoErAk2WzaAD5qmHtePI7tbtw1ndAQhE8y6J_mB29NHMD04dIiZXfrpmRpFwZbMW9Yph4yVD48iSluFXAT84Kw_GmvQWlhK4TxDmNxFqMcmJagQsheOIt_cVEWwcaXZRqZuefSMkGJxhTpHUrt-LbZdaiq9-iJJnLIzuc3q5ZTxdZDTIcWnog');

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
  }

  telaProdutos() {
    this.router.navigate(['/produto']);
  }
  telaClientes() {
    this.router.navigate(['/cliente']);
  }
  telaVendas() {
    this.router.navigate(['/venda']);
  }
  telaPagamentos() {
    this.router.navigate(['/pagamento']);
  }
  telaCategorias() {
    this.router.navigate(['/categoria']);
  }
  telaEstoques() {
    this.router.navigate(['/estoque']);
  }
  telaMarcas() {
    this.router.navigate(['/marca']);
  }
  telaFornecedores() {
    this.router.navigate(['/fornecedore']);
  }
  telaVisualizarAllProdutos() {
    this.router.navigate(['/produto/all']);
  }
  telaNewVenda() {
    this.router.navigate(['/venda/new']);
  }

  data: any;
  data2: any;
}

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

  data: any;
  data2: any;

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
  }

}

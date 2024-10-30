import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {ChartModule} from 'primeng/chart';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, MatButtonModule, MatDividerModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit() {
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
  constructor(private router: Router) {}

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

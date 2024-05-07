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

    // localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJkYXRhLWdpcmFmZnVzLWp3dCIsInN1YiI6IjA1NTYyODQ5MjU5IiwiZ3JvdXBzIjpbIkFkbWluIl0sImV4cCI6MTczMTU0NTUyNiwiaWF0IjoxNzE0MjY1NTI2LCJqdGkiOiI1ODY3ODUwMC03ZDgxLTRjYTEtOGZlYi0yMDYyMjY1MTQxYjEifQ.SE20jlZDF5fmE-821BphUPlkxcoHRoVD--RUrv4PCUNEqRX-LZVMalWLg0LpstPUjLdR1f0njvwFQ9TKdOsHE9ZY_FLRX80NeIXYZxQyO3RFRkAB2y_uSuJbechA4fnJOmxrDBiBfRjCwipAWBW2SKuIapPQvgxWGuWGgKBAw6-b-h7x4dzSLVQp4wfgZWrf7IhF_WPVmf5oyWskjQ6wMQvE0SklZXgULoRdVLyvfGkIxdrtAsZWM1YpRS0sapZ2baVNdIKF9rtEGkZvUpuEIfcvNwLdQjCdQz80xjMZoIHK48U576X9lKccNY19bgVzT5OUIrdbbEH5s9WXeDbozg')

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

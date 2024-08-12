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

    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJnaXJhZmZ1cy1qd3QiLCJzdWIiOiJrYWlvIiwiZ3JvdXBzIjpbIkFkbWluIl0sImV4cCI6MTc4NjUxMTc2MSwiaWF0IjoxNzIzNDM5NzYxLCJqdGkiOiI3YTQyNjllOS04ODA2LTQ2NzItYTM2NC0zZGNjY2ZmOTU4YTAifQ.IfAug0FasCj244sBjVbCmDrgxOoTHaQVERQYz4dU_iC8lX9zXbM7s1V2Dtx_39yo6qUSfQWY97SnAisc25EtfXL-O3dFKElfuMg_TIdKBuLZzzhJ2ftfMZYGROZpuOXHCrwgDt4O50tJoGUHJY-BxsORjrKbeLztp6P_LVsFdj3iV7Vf6E74zVniurPyLtfISruzo-3uRAu9EOxilAy6-ET1hC8sh-ZMxgopGuk8wzcZOLIV98aCdo1UQ796vxUpXDpL5BC9WnyhU88uHOQ7cObS-f0hmmkEflBwt-gvXuHF9oCDqqk69ls9f2izo6qkDBgpmbqEA6-JABY3LiZUvw');

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

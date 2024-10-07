import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SidebarModule, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  totalCarrinho: number = 0;
  
  ngOnInit(): void {
    this.atualizarTotalCarrinho();
  }
  constructor(private router: Router, private cartService: CartService) {}

  // Função para atualizar o valor total do carrinho
  atualizarTotalCarrinho(): void {
    this.cartService.getCartObservable().subscribe(carrinho => {
      this.totalCarrinho = carrinho?.valorTotal ?? 0;
    });
  }

  irParaCarrinho(){
    this.router.navigate(['carrinho']);
  }
  visibleSidebar1!: boolean;

  irParaHome() {
    this.router.navigate(['']);
  }
  irParaConta() {
    this.router.navigate(['conta']);
  }
}

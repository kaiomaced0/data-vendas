import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CartService } from './services/cart/cart.service';
import { VendaService } from './services/venda/venda.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [CartService, VendaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-vendas';
}

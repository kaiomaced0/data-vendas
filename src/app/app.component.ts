import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CartService } from './services/cart/cart.service';
import { VendaService } from './services/venda/venda.service';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ReactiveFormsModule],
  providers: [CartService, VendaService, BrowserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'data-vendas';
  
  ngOnInit(): void {
    this.setStaticToken();
  }

  setStaticToken(): void {
    localStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJnaXJhZmZ1cy1qd3QiLCJzdWIiOiJrYWlvIiwiZ3JvdXBzIjpbIkFkbWluIl0sImV4cCI6MTc4ODc2ODQ5MCwiaWF0IjoxNzI1Njk2NDkwLCJqdGkiOiI3ZjI5NWFlZS05ZjRjLTQ2ZWItYTAzNi04ZWQ0ZDM1YjljMGEifQ.D4wfKwX15G8AxEtXQtQwulZBRyfxQPUtN9dfihihMHsyHW5_a1fsy0QrGJq2YfxTKURi1eJsHXIpDoZk8PdWeTeZz2PGr5-MY1q2JLcZA6_ffk1Y15EmMEJl6o0gxAnixHc6PUhVabuxWvOOv7kICFJEEOWfUpkKpdoErAk2WzaAD5qmHtePI7tbtw1ndAQhE8y6J_mB29NHMD04dIiZXfrpmRpFwZbMW9Yph4yVD48iSluFXAT84Kw_GmvQWlhK4TxDmNxFqMcmJagQsheOIt_cVEWwcaXZRqZuefSMkGJxhTpHUrt-LbZdaiq9-iJJnLIzuc3q5ZTxdZDTIcWnog'
    );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagamento } from '../../models/pagamento.models';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiUrl = '/pagamentos';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  constructor(private httpClient: HttpClient) { }

  list(page: number, pageSize: number){
    return this.httpClient.get<Pagamento[]>(`${this.apiUrl}/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(pagamentos => console.log(pagamentos))
    );
  }
  listSize(){
    return this.httpClient.get<number>(`${this.apiUrl}/size`, this.httpOptions).pipe(
      tap(pagamentosSize => console.log(pagamentosSize))
    );
  }
}

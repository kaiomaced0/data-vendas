import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from '../../models/venda.models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private apiUrl = '/vendas';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Venda[]>(this.apiUrl, this.httpOptions).pipe(
      tap(vendas => console.log(vendas))
    );
  }

  insert(p: Venda): Observable<Venda> {
    return this.httpClient.post<Venda>(this.apiUrl, p, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Venda> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Venda>(url, this.httpOptions);
  }

  update(id: number, p: Venda): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}
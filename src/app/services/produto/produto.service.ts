import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = '/produtos';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.apiUrl, this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }

  estoques(){
    return this.httpClient.get<Produto[]>(`${this.apiUrl+'/estoques'}`, this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }


  insert(p: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.apiUrl, p, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Produto> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Produto>(url, this.httpOptions);
  }

  update(id: number, p: Produto): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../../models/categoria.models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = '/categorias';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  constructor(private httpClient: HttpClient) { }

  list(page: number, pageSize: number){
    return this.httpClient.get<Categoria[]>(`${this.apiUrl}/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(categorias => console.log(categorias))
    );
  }
  listSize(){
    return this.httpClient.get<number>(`${this.apiUrl}/size`, this.httpOptions).pipe(
      tap(categoriaSize => console.log(categoriaSize))
    );
  }

  insert(p: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.apiUrl, p, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Categoria>(url, this.httpOptions);
  }

  update(id: number, p: Categoria): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}

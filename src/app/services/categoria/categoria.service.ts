import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Categoria } from '../../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

   private baseUrl = '/categorias';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl, this.httpOptions).pipe(
      tap(categoria => console.log(categoria)));
  }

  insert(nome: string): Observable<any> {
    return this.http.post<Categoria>(this.baseUrl, {nome}, this.httpOptions);
  }

  update(id: number, categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<Categoria>(url, categoria, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Categoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Categoria>(url, this.httpOptions);
  }
}

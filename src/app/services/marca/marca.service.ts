import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../../models/marca.models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private apiUrl = '/marcas';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Marca[]>(this.apiUrl, this.httpOptions).pipe(
      tap(marcas => console.log(marcas))
    );
  }

  estoques(){
    return this.httpClient.get<Marca[]>(`${this.apiUrl+'/estoques'}`, this.httpOptions).pipe(
      tap(marcas => console.log(marcas))
    );
  }


  insert(p: Marca): Observable<Marca> {
    return this.httpClient.post<Marca>(this.apiUrl, p, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Marca> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Marca>(url, this.httpOptions);
  }

  update(id: number, p: Marca): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, p, this.httpOptions);
  }
}

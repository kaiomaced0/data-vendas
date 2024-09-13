import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8082/clientes';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  constructor(private httpClient: HttpClient) { }

  list(page: number, pageSize: number){
    return this.httpClient.get<Cliente[]>(`${this.apiUrl}/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(clientes => console.log(clientes))
    );
  }
  listSize(){
    return this.httpClient.get<number>(`${this.apiUrl}/size`, this.httpOptions).pipe(
      tap(clientesSize => console.log(clientesSize))
    );
  }
  insert(c: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.apiUrl, c, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Cliente>(url, this.httpOptions);
  }

  update(id: number, c: Cliente): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, c, this.httpOptions);
  }
}

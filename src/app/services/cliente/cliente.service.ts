import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = '/clientes';

 private token  = localStorage.getItem('token');

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
 };
 httpOptions2 = {
   headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
 };


 constructor(private httpClient: HttpClient) { }

 list(){
   return this.httpClient.get<Cliente[]>(this.apiUrl, this.httpOptions).pipe(
     tap(clientes => console.log(clientes))
   );
 }
 listIds(ids: number[]): Observable<Cliente[]> {
   return this.httpClient.post<Cliente[]>(`${this.apiUrl}/carrinho/ids`, ids ,this.httpOptions);
 }

 insert(p: Cliente): Observable<Cliente> {
   return this.httpClient.post<Cliente>(this.apiUrl, p, this.httpOptions);
 }

 delete(id: number): Observable<any> {
   const url = `${this.apiUrl}/delete/${id}`;
   return this.httpClient.patch(url, null, this.httpOptions2);
 }

 getById(id: number): Observable<Cliente> {
   const url = `${this.apiUrl}/${id}`;
   return this.httpClient.get<Cliente>(url, this.httpOptions);
 }

 getByIdAdmin(id: number): Observable<Cliente> {
   const url = `${this.apiUrl}/admin/${id}`;
   return this.httpClient.get<Cliente>(url, this.httpOptions).pipe(
     tap(Cliente => console.log(Cliente))
   );

 }

 update(id: number, p: Cliente): Observable<any> {
   const url = `${this.apiUrl}/${id}`;
   return this.httpClient.put(url, p, this.httpOptions);
 }
}

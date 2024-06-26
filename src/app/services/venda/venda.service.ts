import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Venda } from '../../models/venda.models';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private apiUrl = 'http://localhost:8082/vendas';

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
 listIds(ids: number[]): Observable<Venda[]> {
   return this.httpClient.post<Venda[]>(`${this.apiUrl}/carrinho/ids`, ids ,this.httpOptions);
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

 getByIdAdmin(id: number): Observable<Venda> {
   const url = `${this.apiUrl}/admin/${id}`;
   return this.httpClient.get<Venda>(url, this.httpOptions).pipe(
     tap(Venda => console.log(Venda))
   );

 }

 update(id: number, p: Venda): Observable<any> {
   const url = `${this.apiUrl}/${id}`;
   return this.httpClient.put(url, p, this.httpOptions);
 }
}

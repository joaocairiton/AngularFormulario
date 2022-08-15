import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  //lista dos os clientes
  private baseURL = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  obterListaCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseURL}`);
  }

  cadastrarCliente(cliente: Cliente): Observable<Object> {
    return this.http.post(`${this.baseURL}`, cliente);
  }
  atualizar(id: number, cliente: Cliente): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, cliente);
  }
  buscarCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseURL}/${id}`);
  }
  removerCliente(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

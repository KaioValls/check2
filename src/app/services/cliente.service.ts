import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) {

   }

   HTTPS = 'http://localhost:3000/clientes';

   getAllClient(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.HTTPS) as Observable<Cliente[]>;
   }

  //Esta lista virá da API
  clientes:Cliente[] = [
    {id: "fdaklfads", nome: "Thiago Xavier"},
    {id: "teste", nome : "Teste 2", telefone:"2345678"}
  ];

  listar():Cliente[]{
    return this.clientes;
  }

  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
       const index = this.clientes.indexOf(cliente);
       this.clientes.splice(index,1);
    }
  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
  }
}

import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  tarefa : Tarefa[]= [];


  listar():Tarefa[]{
    return this.tarefa;
  }

  remover(id:string){
    const cliente = this.tarefa.find(c => c.id == id);

    if(cliente){
       const index = this.tarefa.indexOf(cliente);
       this.tarefa.splice(index,1);
    }
  }

  adicionar(tarefa:Tarefa){
    this.tarefa.push(tarefa);
  }
}

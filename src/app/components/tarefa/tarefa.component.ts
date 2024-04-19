import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../interfaces/Tarefa';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  tarefas:Tarefa[] = [];
  tarefaForms : FormGroup

  constructor(private tarefaService:TarefaService , private formBuilder : FormBuilder){
    this.tarefaForms = this.formBuilder.group({
      titulo: ['',Validators.required],
      descricao : ['',Validators.required],
      dataDeVencimento:['',Validators.required]
    })
  }

  inserir(){
    const tarefaNova: Tarefa = {
      titulo: this.tarefaForms.value.titulo,
      descricao : this.tarefaForms.value.descricao,
      dataDeVencimento: this.tarefaForms.value.dataDeVencimento,
      id : this.generateRandomString(6)
    }
    this.tarefaForms.reset()
    this.tarefaService.adicionar(tarefaNova)
    alert("Cadastrado com sucesso!")
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  listar():void{
    this.tarefas = this.tarefaService.listar();
}

ngOnInit():void{
  this.listar();
}

remover(id : string){
  this.tarefaService.remover(id)
  alert("Removido com sucesso")
}
}

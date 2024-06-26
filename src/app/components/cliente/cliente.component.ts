import { Cliente } from './../../interfaces/Cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
    clientes:Cliente[] = [];
  clientForm : FormGroup = new FormGroup({})

   constructor(private clienteService:ClienteService, private formBuilder : FormBuilder) {
    this.clientForm = this.formBuilder.group({
      nome : ['', Validators.required],
      telefone : ['', Validators.required]
    })
  }

  inserir(){
    if(this.clientForm.valid){
      const clientNovo: Cliente = {
        nome: this.clientForm.value.nome,
        telefone : this.clientForm.value.telefone,
        id : this.generateRandomString(6)
      }
      this.clientForm.reset()
      this.clienteService.adicionar(clientNovo)
      alert("Cadastrado com sucesso!")
    }

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
      this.clienteService.getAllClient().subscribe(
        (clientes: Cliente[]) => (this.clientes = clientes));
  }

  ngOnInit():void{
    this.listar();
  }

  remover(id : string){
    this.clienteService.remover(id)
    alert("Removido com sucesso")
  }

}

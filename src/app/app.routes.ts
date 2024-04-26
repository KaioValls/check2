import { Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

export const routes: Routes = [
  {path:"" , component: HomeComponent},
  {path:"cliente" , component: ClienteComponent},
  {path:"cliente/:id", component: ClienteDetailComponent},
  {path:"tarefa", component:TarefaComponent},
  {path:"**", component:HomeComponent}
];

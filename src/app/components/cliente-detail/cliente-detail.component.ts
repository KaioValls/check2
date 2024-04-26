import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detail',
  standalone: true,
  imports: [],
  templateUrl: './cliente-detail.component.html',
  styleUrl: './cliente-detail.component.css'
})
export class ClienteDetailComponent {

  constructor(private route : ActivatedRoute){
    this.getClientById();
  }

  id:string = "";

  getClientById(){
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id);

  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {


  id:number;
  cliente:Cliente = new Cliente();
  constructor(private service:ClienteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.buscarCliente(this.id).subscribe(data =>{
      this.cliente = data;
    },error => console.log(error));

  }

  listaDeCliente(){
    this.router.navigate(['/clientes']);


  }

  onSubmit(){
    this.service.atualizar(this.id,this.cliente).subscribe(data => {
      this.listaDeCliente();
    },error => console.log(error));
  }

}



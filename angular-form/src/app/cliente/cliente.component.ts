import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[];

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.obterCliente();
  }
  atualizarCliente(id: number) {
    this.router.navigate(['atualizar', id]);
  }

  private obterCliente() {
    this.service.obterListaCliente().subscribe((data) => {
      this.clientes = data;
    });
  }

  removerCliente(id: number) {
    this.service.removerCliente(id).subscribe((data) => {
      this.obterCliente();
    });
  }
  detailsCliente(id:number){
this.router.navigate(['details',id])

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {



  cliente: Cliente = new Cliente();
  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

salvarCliente(){
  this.service.cadastrarCliente(this.cliente).subscribe(data => {

    console.log(data);
    this.tranferirListaCliente();
  }, err => console.log(err));
}
tranferirListaCliente(){
  this.router.navigate(['/clientes']);
}


  onSubmit(){
    this.salvarCliente();

  }

}

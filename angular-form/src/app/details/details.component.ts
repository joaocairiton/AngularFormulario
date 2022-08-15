import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id: number;
  cliente: Cliente;
  constructor(private route:ActivatedRoute,private service: ClienteService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.service.buscarCliente(this.id).subscribe(data => {
      
    this.cliente = data;
    });

  }

}

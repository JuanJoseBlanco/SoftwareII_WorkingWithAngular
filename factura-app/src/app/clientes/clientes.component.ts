import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  habilitar: boolean = true;

  constructor(private clienteService: ClienteService){
    
  }

  ngOnInit(): void {
    this.clienteService.getCliente().subscribe(
      clientes => this.clientes = clientes
    );
  }

  setHabilitar(){
    this.habilitar = this.habilitar === true ? false : true;
  }
}
import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})

export class ConfiguracionComponent implements OnInit{
  modalActivo: boolean;
  
  constructor (public configuracionService: ConfiguracionService) {
  }
  ngOnInit () {
    this.modalActivo = false;
  }
  public activarModal() {
    this.modalActivo = true;
  }
  public cancelarModal() {
    this.modalActivo = false;
  }
}
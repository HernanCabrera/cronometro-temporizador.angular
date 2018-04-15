import { Injectable } from "@angular/core";

@Injectable()

export class ConfiguracionService {
  
  sonidoActivo: boolean = true;
  alarmaSeleccionada = {
    src: './../../../assets/alarmas/timbre.mp3',
    nombre: 'timbre'
  };
  
  listaDeAlarmas = [
    {
      src: './../../../assets/alarmas/despertador.mp3',
      nombre: 'despertador'
    },
    {
      src: './../../../assets/alarmas/alarma de humo.mp3',
      nombre: 'humo'
    },
    {
      src: './../../../assets/alarmas/mujer gritando.mp3',
      nombre: 'mujer gritando'
    },
    {
      src: './../../../assets/alarmas/reloj antiguo.mp3',
      nombre: 'reloj antiguo'
    },
    {
      src: './../../../assets/alarmas/tic tac.mp3',
      nombre: 'tic tac'
    },
    {
      src: './../../../assets/alarmas/timbre.mp3',
      nombre: 'timbre'
    },
    {
      src: './../../../assets/alarmas/tormenta fuerte.mp3',
      nombre: 'tormenta fuerte'
    }
  ];
  

  constructor () {}

  
  public toggleCheckbox() {
    this.sonidoActivo = !this.sonidoActivo;
  }
}
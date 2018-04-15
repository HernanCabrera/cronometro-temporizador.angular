import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfiguracionService } from '../services/configuracion.service';

@Component({
	selector: 'app-temporizador',
	templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})

export class TemporizadorComponent implements OnInit, OnDestroy{
  temporizador = {
    tiempo: {
      hora: 0,
      minuto: 0,
      segundo: 0
    },
    auxTiempo: {
      hora: 0,
      minuto: 0,
      segundo: 0
    },
    listaDeTiempos: [],
    tiempoActivo: false,
    nombre: 'Temporizador',
    audioID: null,
    intervalo: null,
    agregarActivo: false,
    nuevoTiempo: {
      hora: '',
      minuto: '',
      segundo: ''
    },
    opcion: 0
  };
  alarmaSeleccionada;
  constructor (private configuracionService: ConfiguracionService) {
  }
  
  ngOnInit () {
    this.alarmaSeleccionada = this.configuracionService.alarmaSeleccionada;
  }

  ngOnDestroy () {
    this.reiniciarValores(this.temporizador);
  }

	iniciarTemporizador (obj) {
    // Solucion al problema de celulares
    this.agregarAudio(obj);
    // ---------------------------------
    obj.tiempoActivo = !obj.tiempoActivo;
    if (!this.tiempoNulo(obj.tiempo)) {
      if (obj.tiempoActivo) {
        obj.intervalo = setInterval(() => {
          this.reducirElTiempo(obj);
        }, 1000)
      } else {
        this.cambiarTitulo(1, obj.nombre, null, null);
        clearInterval(obj.intervalo);
      }
    } else {
      obj.tiempoActivo = !obj.tiempoActivo;
    }
  }
	reducirElTiempo (obj) {
    if (this.tiempoNulo(obj.tiempo)) {
      if (this.configuracionService.sonidoActivo) {
        this.iniciarAudio(obj);
      }
      this.reiniciarValores(obj);
    } else {
      if (obj.tiempo.minuto === 0 && obj.tiempo.hora > 0 && obj.tiempo.segundo === 0) {
        obj.tiempo.hora--;
        obj.tiempo.minuto = 60;
      }
      if (obj.tiempo.segundo === 0 && obj.tiempo.minuto > 0) {
        obj.tiempo.minuto--;
        obj.tiempo.segundo = 60;
      }
      obj.tiempo.segundo--;
      this.cambiarTitulo(2, obj.nombre, obj.tiempo, null);
    }
  }
  tiempoNulo (tiempo) {
    if (parseInt(tiempo.hora) === 0 && parseInt(tiempo.minuto) === 0 && parseInt(tiempo.segundo) === 0) {
      return true;
    } else {
      return false;
    }
  }
  iniciarAudio (obj) {
    obj.audioID.currentTime = 0;
    obj.audioID.play();
  }
  reiniciarValores (obj) {
    obj.tiempoActivo = false;
    this.cambiarTitulo(1, obj.nombre, null, null);
    obj.tiempo = this.clonarObjeto(obj.auxTiempo)
    clearInterval(obj.intervalo);
  }
  cambiarTitulo (opts, str, tiempo, iteraciones) {
    const tituloOriginal = 'TimeToTime';
    if (opts === 1) {
      document.title = `${tituloOriginal}-${str}`;
    } else if (opts === 2) {
      document.title = tiempo.hora + ':' +
                        ((tiempo.minuto <= 9) ? '0' + tiempo.minuto : tiempo.minuto) + ':' +
                        ((tiempo.segundo <= 9) ? '0' + tiempo.segundo : tiempo.segundo) +
                        ` ${tituloOriginal}-${str}`;
    } else {
      document.title = `${iteraciones} | ` + tiempo.hora + ':' +
                        ((tiempo.minuto <= 9) ? '0' + tiempo.minuto : tiempo.minuto) + ':' +
                        ((tiempo.segundo <= 9) ? '0' + tiempo.segundo : tiempo.segundo) +
                        ` ${tituloOriginal}-${str}`;
    }
  }
  inicializarTiempo (tiempo, opts) {
    if (opts === 1) {
      tiempo.hora = tiempo.minuto = tiempo.segundo = 0;
    } else {
      tiempo.hora = tiempo.minuto = tiempo.segundo = '';
    }
  }
  agregarAudio (obj) {
    if (obj.audioID === null && this.configuracionService.sonidoActivo) {
      obj.audioID = document.getElementById(obj.nombre);
      obj.audioID.play();
      obj.audioID.pause();
    }
  }
  activarModal (obj) {
    obj.agregarActivo = true;
  }
  cancelarModal (obj) {
    obj.agregarActivo = false;
    this.inicializarTiempo(obj.nuevoTiempo, 2);
  }
  clonarObjeto (obj) {
    return Object.assign({}, obj);
  }
  agregarALista (obj) {
    const MAX = 50;
    if (obj.nuevoTiempo.hora === '') {
      obj.nuevoTiempo.hora = 0;
    }
    if (obj.nuevoTiempo.minuto === '') {
      obj.nuevoTiempo.minuto = 0;
    }
    if (obj.nuevoTiempo.segundo === '') {
      obj.nuevoTiempo.segundo = 0;
    }

    if (obj.listaDeTiempos.length < MAX && !this.tiempoNulo(obj.nuevoTiempo) && this.esTiempoValido(obj.nuevoTiempo)) {
      const clon = this.clonarObjeto(obj.nuevoTiempo);
      clon.hora = (clon.hora === '') ? 0 : parseInt(clon.hora);
      clon.minuto = (clon.minuto === '') ? 0 : parseInt(clon.minuto);
      clon.segundo = (clon.segundo === '') ? 0 : parseInt(clon.segundo);
      obj.listaDeTiempos.push(clon);
      this.inicializarTiempo(obj.nuevoTiempo, 2);
      this.cancelarModal(obj);
    } else {
      this.inicializarTiempo(obj.nuevoTiempo, 2);
    }
  }
  agregarAlPrincipal (obj) {
    
    if (!obj.tiempoActivo) {
      obj.tiempo = this.clonarObjeto(obj.nuevoTiempo)
      obj.auxTiempo = this.clonarObjeto(obj.nuevoTiempo);
      this.inicializarTiempo(obj.nuevoTiempo, 2);
    }
  }
  eliminarTiempo (tiempo) {
    tiempo.listaDeTiempos.splice(tiempo.indice, 1);
  }

  sumar (obj) {
    if (obj.opcion == 1) {
      if (obj.nuevoTiempo.hora != 23) {
        obj.nuevoTiempo.hora++;
      } else {
        obj.nuevoTiempo.hora = 23;
      }
    } else if (obj.opcion == 2) {
      if (obj.nuevoTiempo.minuto != 59) {
        obj.nuevoTiempo.minuto++;
      } else {
        obj.nuevoTiempo.minuto = 59;
      }
    } else {
      if (obj.nuevoTiempo.segundo != 59) {
        obj.nuevoTiempo.segundo++;
      } else {
        obj.nuevoTiempo.segundo = 59;
      }
    }
  }
  restar (obj) {
    if (obj.opcion == 1) {
      if (obj.nuevoTiempo.hora != 0) {
        obj.nuevoTiempo.hora--;
      } else {
        obj.nuevoTiempo.hora = 0;
      }
    } else if (obj.opcion == 2) {
      if (obj.nuevoTiempo.minuto != 0) {
        obj.nuevoTiempo.minuto--;
      } else {
        obj.nuevoTiempo.minuto = 0;
      }
    } else {
      if (obj.nuevoTiempo.segundo != 0) {
        obj.nuevoTiempo.segundo--;
      } else {
        obj.nuevoTiempo.segundo = 0;
      }
    }
  }

  esTiempoValido (tiempo) {
    if (tiempo.hora >= 0 && tiempo.hora <= 23 &&
        tiempo.minuto >= 0 && tiempo.minuto <= 59 &&
        tiempo.segundo >= 0 && tiempo.segundo <= 59) {
      return true;
    } else {
      return false;
    }
  }
}
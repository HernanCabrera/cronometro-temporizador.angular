import { Component } from '@angular/core';

@Component({
	selector: 'app-temporizador',
	templateUrl: './temporizador.component.html'
})

export class TemporizadorComponent{
  public temporizador:Object;
  constructor() {
    this.temporizador = {
      tiempo: {
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
      }
    }
  }
	iniciarTemporizador (obj) {
    // Solucion al problema de celulares
    // this.agregarAudio(obj);
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
      // this.iniciarAudio(obj);
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
    this.inicializarTiempo(obj.tiempo, 1);
    clearInterval(obj.intervalo);
  }
  cambiarTitulo (opts, str, tiempo, iteraciones) {
    if (opts === 1) {
      document.title = `${str}`;
    } else if (opts === 2) {
      document.title = ((tiempo.hora <= 9) ? '0' + tiempo.hora : tiempo.hora) + ':' +
                        ((tiempo.minuto <= 9) ? '0' + tiempo.minuto : tiempo.minuto) + ':' +
                        ((tiempo.segundo <= 9) ? '0' + tiempo.segundo : tiempo.segundo) +
                        ` ${str}`;
    } else {
      document.title = `${iteraciones} | ` + ((tiempo.hora <= 9) ? '0' + tiempo.hora : tiempo.hora) + ':' +
                        ((tiempo.minuto <= 9) ? '0' + tiempo.minuto : tiempo.minuto) + ':' +
                        ((tiempo.segundo <= 9) ? '0' + tiempo.segundo : tiempo.segundo) +
                        ` ${str}`;
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
    if (obj.audioID === null) {
      obj.audioID = document.getElementById(obj.nombre);
      obj.audioID.play();
      obj.audioID.pause();
    }
  }
  activarModal (obj) {
    obj.agregarActivo = true
  }
  cancelarModal (obj) {
    obj.agregarActivo = false
    this.inicializarTiempo(obj.nuevoTiempo, 2)
  }
  clonarObjeto (obj) {
    return Object.assign({}, obj)
  }
  agregarALista (obj) {
    const MAX = 50
    if (obj.listaDeTiempos.length < MAX) {
      const clon = this.clonarObjeto(obj.nuevoTiempo)
      clon.hora = (clon.hora === '') ? 0 : parseInt(clon.hora)
      clon.minuto = (clon.minuto === '') ? 0 : parseInt(clon.minuto)
      clon.segundo = (clon.segundo === '') ? 0 : parseInt(clon.segundo)
      obj.listaDeTiempos.push(clon)
      this.inicializarTiempo(obj.nuevoTiempo, 2)
      this.cancelarModal(obj)
    }
  }
  agregarAlPrincipal (obj) {
    console.log(obj.tiempoActivo, obj.tiempo, obj.nuevoTiempo)
    if (!obj.tiempoActivo) {
      obj.tiempo = this.clonarObjeto(obj.nuevoTiempo)
      this.inicializarTiempo(obj.nuevoTiempo, 2);
    }
  }
  eliminarTiempo (tiempo) {
    tiempo.listaDeTiempos.splice(tiempo.indice, 1)
  }
}
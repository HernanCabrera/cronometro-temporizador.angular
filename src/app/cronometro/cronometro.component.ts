import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})

export class CronometroComponent {
  cronometro = {
    tiempo: {
      hora: 0,
      minuto: 0,
      segundo: 0
    },
    listaDeTiempos: [],
    nombre: 'Cronometro',
    tiempoActivo: false,
    intervalo: null
  };
  constructor () {

  }

  iniciarCronometro(obj) {
    obj.tiempoActivo = !obj.tiempoActivo;
    if (obj.tiempoActivo) {
      obj.intervalo = setInterval(() => {
        obj.tiempo.segundo++;
        if (obj.tiempo.segundo === 60) {
          obj.tiempo.minuto++;
          obj.tiempo.segundo = 0;
        }
        if (obj.tiempo.minuto === 60) {
          obj.tiempo.hora++;
          obj.tiempo.minuto = 0;
        }
        this.cambiarTitulo(2, obj.nombre, obj.tiempo, null);
      }, 1000)
    } else {
      this.cambiarTitulo(1, obj.nombre, null, null);
      clearInterval(obj.intervalo);
    }
  }

  cambiarTitulo(opts, str, tiempo, iteraciones) {
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

  reiniciarValores(obj) {
    obj.tiempoActivo = false;
    this.cambiarTitulo(1, obj.nombre, null, null);
    this.inicializarTiempo(obj.tiempo, 1);
    clearInterval(obj.intervalo);
  }

  clonarObjeto(obj) {
    return Object.assign({}, obj);
  }

  inicializarTiempo(tiempo, opts) {
    if (opts === 1) {
      tiempo.hora = tiempo.minuto = tiempo.segundo = 0
    } else {
      tiempo.hora = tiempo.minuto = tiempo.segundo = ''
    }
  }

  agregarALista(obj) {
    const MAX = 50
    if ((!this.tiempoNulo(obj.tiempo)) && obj.listaDeTiempos.length < MAX && obj.tiempoActivo) {
      const clon = this.clonarObjeto(obj.tiempo);
      obj.listaDeTiempos.unshift(clon);
    }
  }

  tiempoNulo(tiempo) {
    if (parseInt(tiempo.hora) === 0 && parseInt(tiempo.minuto) === 0 && parseInt(tiempo.segundo) === 0) {
      return true
    } else {
      return false
    }
  }

  eliminarTiempo(tiempo) {
    tiempo.listaDeTiempos.splice(tiempo.indice, 1);
  }
}
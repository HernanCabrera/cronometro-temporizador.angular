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
	ngOnInit () {
		console.log(this.temporizador)
	}
}
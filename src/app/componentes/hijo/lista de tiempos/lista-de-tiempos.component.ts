import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-lista-de-tiempos',
	templateUrl: 'lista-de-tiempos.component.html'
})

export class ListaDeTiemposComponent {
	@Input() obj:Object;
	@Output('agregar') agregarEvento = new EventEmitter();
	@Output('eliminar') eliminarEvento = new EventEmitter();
	agregarAlPrincipal (nuevoTiempo, obj) {
		obj.nuevoTiempo.hora = nuevoTiempo.hora;
    obj.nuevoTiempo.minuto = nuevoTiempo.minuto;
    obj.nuevoTiempo.segundo = nuevoTiempo.segundo;
		this.agregarEvento.emit(obj);
	}
	eliminarTiempo (indiceDeTiempo, obj) {
		this.eliminarEvento.emit({ listaDeTiempos: obj.listaDeTiempos, indice: indiceDeTiempo });
	}
}
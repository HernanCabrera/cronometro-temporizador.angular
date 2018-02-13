import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-nuevo-tiempo',
	templateUrl: './nuevo-tiempo.component.html',
	styleUrls: ['./nuevo-tiempo.component.css']
})

export class NuevoTiempoComponent {
	@Input() obj:Object;
	@Output('agregar') agregarEvento = new EventEmitter();
	@Output('cancelar') cancelarEvento = new EventEmitter();
	agregarALaLista () {
		this.agregarEvento.emit(this.obj);
	}
	cancelarModal () {
		this.cancelarEvento.emit(this.obj);
	}
}
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-tiempo',
	templateUrl: './tiempo.component.html'
})

export class TiempoComponent {
	@Input('tiempo') tiempo:Object;
	ngOnInit() {
		console.log(this.tiempo)
	}
}
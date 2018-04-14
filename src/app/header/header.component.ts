import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{
  menuActivo: boolean = false;
  anchoDePantalla: number = 0;
  constructor( ) {
  }
  toggleMenu () {
    this.menuActivo = !this.menuActivo;
  }
  ngOnInit() {
    this.anchoDePantalla = window.innerWidth;
    window.addEventListener('resize', (e) => {
      this.medirAnchoDePantalla();
    });
  }

  medirAnchoDePantalla() {
    this.anchoDePantalla = window.innerWidth;
    if (this.anchoDePantalla > 650) {
      this.menuActivo = false;
    }
  }

  desactivarMenu () {
    this.menuActivo = false;
  }
}
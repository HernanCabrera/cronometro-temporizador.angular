import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

/*Rutas*/
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CronometroComponent } from './cronometro/cronometro.component';

/*Componentes*/
import { TiempoComponent } from './hijo/tiempo/tiempo.component';
import { TiempoBotonesComponent } from './hijo/tiempo botones/tiempo-botones.component';
import { NuevoTiempoComponent } from './hijo/nuevo tiempo/nuevo-tiempo.component';
import { ListaDeTiemposComponent } from './hijo/lista de tiempos/lista-de-tiempos.component';

/*Vistas*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/*Pipes*/
import { ConversorATiempoPipe } from './pipes/conversor-a-tiempo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    /* Vistas */
    HeaderComponent,
    FooterComponent,
    /* Rutas */
    TemporizadorComponent,
    CronometroComponent,
    ConfiguracionComponent,
    /* Componentes */
    TiempoComponent,
    TiempoBotonesComponent,
    NuevoTiempoComponent,
    ListaDeTiemposComponent,
    /* Pipes */
    ConversorATiempoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

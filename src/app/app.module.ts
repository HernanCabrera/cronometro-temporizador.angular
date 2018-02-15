import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { TemporizadorComponent } from './componentes/temporizador/temporizador.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { CronometroComponent } from './componentes/cronometro/cronometro.component';
import { ManualComponent } from './componentes/manual/manual.component';

import { TiempoComponent } from './componentes/hijo/tiempo/tiempo.component';
import { TiempoBotonesComponent } from './componentes/hijo/tiempo botones/tiempo-botones.component';
import { NuevoTiempoComponent } from './componentes/hijo/nuevo tiempo/nuevo-tiempo.component';
import { ListaDeTiemposComponent } from './componentes/hijo/lista de tiempos/lista-de-tiempos.component';

import { HeaderComponent } from './componentes/diseño/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemporizadorComponent,
    CronometroComponent,
    ManualComponent,
    ConfiguracionComponent,
    TiempoComponent,
    TiempoBotonesComponent,
    NuevoTiempoComponent,
    ListaDeTiemposComponent
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

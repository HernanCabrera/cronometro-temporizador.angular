import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { TemporizadorComponent } from './componentes/temporizador/temporizador.component'
import { TiempoComponent } from './componentes/hijo/tiempo/tiempo.component'

@NgModule({
  declarations: [
    AppComponent,
    TemporizadorComponent,
    TiempoComponent
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

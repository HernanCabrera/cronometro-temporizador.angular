import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporizadorComponent } from './componentes/temporizador/temporizador.component'

const appRoutes: Routes = [
	{ path: '', component: TemporizadorComponent }
];

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

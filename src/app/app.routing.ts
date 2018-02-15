import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporizadorComponent } from './componentes/temporizador/temporizador.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { CronometroComponent } from './componentes/cronometro/cronometro.component';
import { ManualComponent } from './componentes/manual/manual.component';

const appRoutes: Routes = [
	{ path: '', component: TemporizadorComponent },
	{ path: 'temporizador', component: TemporizadorComponent },
	{ path: 'configuracion', component: ConfiguracionComponent },
	{ path: 'cronometro', component: CronometroComponent },
	{ path: 'manual', component: ManualComponent }
];

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

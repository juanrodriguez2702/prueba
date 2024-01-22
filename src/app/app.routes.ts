import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EstadosDeInventarioComponent } from './estados-de-inventario/estados-de-inventario.component';
import { HistoricosDeInventarioComponent } from './historicos-de-inventario/historicos-de-inventario.component';
import { InventariosEjecutadosComponent } from './inventarios-ejecutados/inventarios-ejecutados.component';
import { PruebasCComponent } from './pruebas-c/pruebas-c.component';

export const routes: Routes = [
    {
        path: '',
        component:AppComponent
    },
    {
        path: 'estados',
        component:EstadosDeInventarioComponent
    },
    {
        path: 'historicos',
        component:HistoricosDeInventarioComponent
    },
    {
        path: 'ejecutados',
        component:InventariosEjecutadosComponent
    },
    {
        path: 'pruebas',
        component:PruebasCComponent
    }
];

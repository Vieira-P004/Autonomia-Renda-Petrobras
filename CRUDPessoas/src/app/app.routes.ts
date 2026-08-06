import { Routes } from '@angular/router';

import { Lista } from './component/lista/lista';
import { Formulario } from './component/formulario/formulario';
import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: Formulario

    },
    {
        path: 'Lista',
        component:Lista
    }
];

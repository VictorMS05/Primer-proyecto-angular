import { Routes } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { ContadorComponent } from './components/contador/contador.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: "", component: MateriasComponent },
  {
    path: 'procesos',
    component: ProcesosComponent,
    children: [
      {
        path: 'contador',
        component: ContadorComponent
      },
      {
        path: 'formulario/:id/:cod',
        component: FormularioComponent
      }
    ]
  },
  { path: "users", component: UsersComponent },
  { path: "about", component: AboutComponent },
  { path: "materias", redirectTo: "" },
  { path: "**", component: Page404Component }
];

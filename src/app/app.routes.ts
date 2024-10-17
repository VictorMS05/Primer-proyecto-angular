import { Routes } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { ContadorComponent } from './component/contador/contador.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
  { path: "", component: MateriasComponent },
  { path: "contador", component: ContadorComponent},
  { path: "about", component: AboutComponent}
];

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MateriadetallesComponent } from '../materia-detalles/materia-detalles.component';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [FormsModule, MateriadetallesComponent],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {

  materias = [
    { id: 1, nombre: 'Desarrollo de App Web', nivel: 'Lic' },
    { id: 2, nombre: 'Modelos de Desarrollo Agil', nivel: 'Lic' },
    { id: 3, nombre: 'Taller de Investigacion', nivel: 'Lic' },
    { id: 4, nombre: 'Gestion de Proyectos de Software', nivel: 'Lic' },
  ];

  todaLista = true;
  autenticado = true;
  texto: string = "";
  materiaseleccionada: any = {};
  mensaje: string = "";

  getmateria(event: Event) {
    let id = event.target as HTMLSelectElement;
    let idx = Number(id.value);

    const asignatura = this.materias.find(materia => materia.id === idx) || {};
    console.log(asignatura);
    this.materiaseleccionada = asignatura;
  }

  onNotify(message: string) {
    this.mensaje = message;
    console.log(this.mensaje);
  }
}

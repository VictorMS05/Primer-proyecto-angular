import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-materia-detalles',
  standalone: true,
  imports: [],
  templateUrl: './materia-detalles.component.html',
  styleUrl: './materia-detalles.component.css'
})
export class MateriadetallesComponent {
  @Input() materia: any = {};
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('El hijo ha hecho click en el botón');
  }
}

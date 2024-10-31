import { Component, inject } from '@angular/core';
import { UsuarioservicioService } from '../../services/usuarioservicio.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userservice = inject(UsuarioservicioService);
  listusuarios: any;

  constructor() {
    this.listusuarios = this.userservice.getusers().subscribe(data => {
      this.listusuarios = data;
      console.log(this.listusuarios);
    });
  }
}

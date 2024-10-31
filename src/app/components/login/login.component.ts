import { Component, inject } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: { nombre: string, avatar: string, tipo: number } = {
    nombre: "",
    avatar: "",
    tipo: 0
  };
  is_auth = false;
  userservice = inject(AuthserviceService);

  constructor() {
    this.usuario.nombre = "Víctor";
    this.usuario.avatar = "foto";
    this.usuario.tipo = 2;
  }

  login() {
    this.usuario.nombre = "Víctor";
    this.usuario.avatar = "foto";
    this.usuario.tipo = 2;
    this.is_auth = true;
    this.userservice.saveuser(this.usuario.nombre, this.usuario.tipo);
  }

  logout() {
    this.usuario.nombre = "";
    this.usuario.avatar = "";
    this.usuario.tipo = 0;
    this.is_auth = false;
    this.userservice.saveuser(this.usuario.nombre, this.usuario.tipo);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  usuario: any = {'name': '', 'type': ''};

  constructor() { }

  saveuser(nom: string, tipo: number) {
    this.usuario.name = nom;
    this.usuario.type = tipo;
  }

  getuser() {
    return this.usuario;
  }
}

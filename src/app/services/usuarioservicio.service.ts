import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioservicioService {

  constructor(private http: HttpClient) { }

  getusers() {
    // this.http.get("https://reqres.in/api/users", {responseType: 'json'}).subscribe(data => console.log());

    return(this.http.get("https://reqres.in/api/users", {responseType: 'json'}));
  }
}

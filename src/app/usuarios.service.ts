import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable()
export class UsuariosService {
  usuarios = [
    {
      nombre: 'Fermin Acuña',
      email: 'fermin.unicen@gmail.com',
      password: '123456',
    },
  ];
  emailArray: string[] = [];
  val: boolean = false;
  login: boolean = false;
  statusLogin: boolean = false;
  nombreUsuario: string = '';
  mens: EventEmitter<any> = new EventEmitter<any>();

  registro(nombre: string, email: string, password: string) {
    this.usuarios.forEach((user, index: any) => {
      this.emailArray[index] = user.email;
    });

    if (!this.emailArray.includes(email)) {
      this.val = false;
      this.login = true;
      this.usuarios.push({
        nombre: nombre,
        email: email,
        password: password,
      });
      this.nombreUsuario = nombre;
      this.mens.emit(this.login);
      this.mens.emit(this.nombreUsuario);
    } else {
      this.val = true;
      this.login = false;
    }
  }

  Login(nombre: string, password: string) {
    this.nombreUsuario = nombre;
    this.usuarios.forEach((user) => {
      if (password == user.password && nombre == user.nombre) {
        this.login = true;
        this.statusLogin = false;
        this.mens.emit(this.login);
        this.mens.emit(this.nombreUsuario);
      } else {
        this.login = false;
        this.statusLogin = true;
      }
    });
  }

  Logout() {
    this.login = false;
    this.mens.emit(this.login);
  }

  constructor() {}
}

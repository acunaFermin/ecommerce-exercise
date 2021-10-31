import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UsuariosService, private router: Router) {}

  ngOnInit(): void {}

  nombre: string = '';
  correo: string = '';
  pass: string = '';
  condicion: boolean = false;

  login() {
    this.userService.Login(this.nombre, this.pass);
    this.condicion = this.userService.statusLogin;

    if (this.userService.login) {
      this.router.navigate(['']);
    }
  }
}

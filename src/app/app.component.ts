import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  title = 'ejercicio';
}

export class Login {
  constructor(private userService: UsuariosService) {}
  login: boolean = this.userService.login;
}

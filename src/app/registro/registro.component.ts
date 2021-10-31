import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup;

  validacion: boolean = false;

  constructor(
    private userService: UsuariosService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      nombre: ['ingrese su nombre', [Validators.required]],
      correo: ['ingrese su correo', [Validators.required]],
      contrasena: [
        '1234567890987',
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  registro_() {
    this.userService.registro(
      this.myForm.value.nombre,
      this.myForm.value.correo,
      this.myForm.value.contrasena
    );
    this.validacion = this.userService.val;
    if (this.userService.login) {
      this.router.navigate(['']);
    }
    console.log(this.userService.login);
    console.log(this.myForm.value.nombre);
  }

  ngOnInit(): void {}
}

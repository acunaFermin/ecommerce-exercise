import { Component, OnInit, NgModule } from '@angular/core';
import { ProductosService } from '../productos.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private userServices: UsuariosService,
    protected productosServices: ProductosService
  ) {}
  valor_!: boolean;

  nombreUser: string = '';
  busqueda: string = 'motos';

  cerrarSesion() {
    this.userServices.Logout();
  }

  Busqueda() {
    if (this.busqueda == '') {
      this.busqueda = '';
    }
    this.productosServices.Busqueda(this.busqueda);
    console.log('busqueda', this.busqueda);
  }

  ngOnInit(): void {
    this.userServices.mens.subscribe(() => {
      this.valor_ = this.userServices.login;
      this.nombreUser = this.userServices.nombreUsuario;
    });
  }
}

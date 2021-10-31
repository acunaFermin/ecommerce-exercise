import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor() {}
  carrito: any[] = [];

  agregarCarrito(producto: any) {
    this.carrito.push(producto);
  }
  quitarCarrito(i: number) {
    this.carrito.splice(i, 1);
  }
}

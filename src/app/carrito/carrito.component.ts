import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['../home/home.component.css'],
})
export class CarritoComponent implements OnInit {
  producto: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductosService: ProductosService,
    private CarritoService: CarritoService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.getProductos(id);
    }
  }
  async getProductos(id: string) {
    this.producto = await this.ProductosService.getByIdCompra(id);
    console.log('response', this.producto);
    this.CarritoService.agregarCarrito(this.producto);
  }

  productos = this.CarritoService.carrito;

  borrar(i: number) {
    this.CarritoService.quitarCarrito(i);
  }

  ngOnInit(): void {}
}

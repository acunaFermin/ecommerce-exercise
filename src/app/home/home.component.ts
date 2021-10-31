import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  static getProductos() {
    throw new Error('Method not implemented.');
  }
  cantidad = 0;
  estado = '';
  n = 0;

  productos: any = [];
  productosPipe: any = [];

  constructor(private productosService: ProductosService) {
    this.getProductos();
  }

  async getProductos() {
    const response: any = await this.productosService.getAll();
    this.productos = response.results;
  }

  ngOnInit(): void {
    this.productosService.eventEmiter.subscribe(() => {
      this.getProductos();
    });
  }
}

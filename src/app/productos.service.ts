import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  eventEmiter: EventEmitter<any> = new EventEmitter<any>();
  productos: any;
  constructor(private http: HttpClient) {}
  busqueda_: string = 'auto';

  Busqueda(solicitud: string) {
    this.busqueda_ = solicitud;
    this.eventEmiter.emit(this.busqueda_);
    console.log('hola', this.busqueda_);
  }

  getFilter() {
    return this.http
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${this.busqueda_}`)
      .toPromise();
  }

  getAll() {
    return this.http
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${this.busqueda_}`)
      .toPromise();
  }

  getById(id: string) {
    return this.http
      .get('https://api.mercadolibre.com/items/' + id)
      .toPromise();
  }
  getByIdCompra(id: string) {
    return this.http
      .get('https://api.mercadolibre.com/items/' + id)
      .toPromise();
  }
}

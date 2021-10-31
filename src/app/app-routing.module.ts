import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos/:id', component: DetalleComponent },
  { path: 'carrito/:id', component: CarritoComponent },
  { path: 'carrito', component: CarritoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

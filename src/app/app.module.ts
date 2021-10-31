import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component'; //agregado desde el curso 
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { UsuariosService } from './usuarios.service';
import { CarritoComponent } from './carrito/carrito.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    MenuComponent,
    LoginComponent,
    DetalleComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //agregado desde el curso
    FormsModule, //agregado desde el curso
    ReactiveFormsModule, // agregado desde el curso
    
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

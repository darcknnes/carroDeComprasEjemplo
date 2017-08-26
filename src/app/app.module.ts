import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/main/app.component';
import { FormularioProductoComponent } from './Components/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './Components/listar-productos/listar-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent,
    ListadoProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component} from '@angular/core';
import { GuardarProductosPredeterminados } from '../../Classes/Productos-predeterminados';
import { Productos } from '../../Classes/Productos';

if ( localStorage.getItem("productos") == null ){
    GuardarProductosPredeterminados.productos_predeterminados_locales();
  }

  if ( localStorage.getItem("categorias") == null ){
    GuardarProductosPredeterminados.categorias_productos();
  }

  @Component({
    selector: 'listado-productos',
    templateUrl: './listar-productos.component.html',
    styleUrls: ['./listar-productos.component.css']
  })

  export class ListadoProductosComponent{
    productos = JSON.parse(localStorage.getItem("productos"));
  }
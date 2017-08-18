import { Component } from '@angular/core';

import { Productos } from '../../Classes/Productos';

const PRODUCTOS: Productos [] = [
  { id: 1, nom_producto: 'Frijol', precio: 1200, unidades: 12 },
  { id: 2, nom_producto: 'Azucar', precio: 2000, unidades: 10, desc_producto: 'descripción azucar' },
  { id: 3, nom_producto: 'Arroz', precio: 2500, unidades: 5, desc_producto: 'descripción arroz descripción arroz descripción arroz descripción arroz descripción arroz' },
  { id: 1, nom_producto: 'Frijol', precio: 1200, unidades: 12 },
  { id: 2, nom_producto: 'Azucar', precio: 2000, unidades: 10, desc_producto: 'descripción azucar' },
  { id: 3, nom_producto: 'Arroz', precio: 2500, unidades: 5, desc_producto: 'descripción arroz' },
  { id: 1, nom_producto: 'Frijol', precio: 1200, unidades: 12 },
  { id: 2, nom_producto: 'Azucar', precio: 2000, unidades: 10, desc_producto: 'descripción azucar' },
  { id: 3, nom_producto: 'Arroz', precio: 2500, unidades: 5, desc_producto: 'descripción arroz' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a su compra Online';
  productos = PRODUCTOS;
  /**
   productos: Productos = new Productos(1, 'frijol', 1200, 10, 'Grano');
   */

}

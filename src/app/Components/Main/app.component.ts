import { Component } from '@angular/core';
import { Productos } from '../../Classes/Productos';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a su nueva compra Online';
  productos: Productos = new Productos(1, 'frijol', 1200, 10, 'Grano');
}

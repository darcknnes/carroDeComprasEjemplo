import {Component, Output, EventEmitter} from '@angular/core';

import { Productos } from '../../Classes/Productos';

@Component({
    selector: 'formulario-producto',
    templateUrl: './formulario-producto.component.html',
    styleUrls: ['../main/app.component.css']
})


export class FormularioProductoComponent {
    model_entrada: Productos = new Productos(0, '' , '', 0, 0, '');
    @Output() onsubmit = new EventEmitter<any>();

    public submit(){
        this.onsubmit.emit(this.model_entrada);
        var producto_nuevo = JSON.parse(localStorage.getItem( "productos" ));
        this.model_entrada.id = Math.max.apply(Math,producto_nuevo.map(function(o){return o.id}))+1;
        producto_nuevo.push(this.model_entrada);
        localStorage.setItem( "productos" , JSON.stringify(producto_nuevo)); // guardar array como string
        this.model_entrada = new Productos(0, '', '', 0, 0, '');
    }
}
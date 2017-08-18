import {Component, Output, EventEmitter} from '@angular/core';

import { Productos_entrada } from '../../Classes/Productos';

@Component({
    selector: 'formulario-producto',
    templateUrl: './formulario-producto.component.html',
    styleUrls: ['./app.component.css']
})

export class Formulario_producto_Component{
    model: Productos_entrada = new Productos_entrada(0, '', 0, 0, '');
    @Output() onsubmit = new EventEmitter<any>();
    
    public submit(){
        this.onsubmit.emit(this.model);
        console.log(this.model);
        this.model = new Productos_entrada(0, '', 0, 0, '');
    }
}
import { Productos, CategoriaProducto } from './Productos';

export class GuardarProductosPredeterminados{

    public static productos_predeterminados_locales(){
        const PRODUCTOS: Productos [] = [
            { id: 1, categoria: 'Deportes y Fitness', nom_producto: 'Frijol', precio: 1200, unidades: 12 },
            { id: 2, categoria: 'Deportes y Fitness', nom_producto: 'Azucar', precio: 2000, unidades: 10, desc_producto:
            'descripción azucar' },
            { id: 3, categoria: 'Deportes y Fitness', nom_producto: 'Arroz', precio: 2500, unidades: 5, desc_producto:
            'descripción arroz descripción arroz descripción arroz descripción arroz descripción arroz' },
            { id: 4, categoria: 'Compùtación', nom_producto: 'Frijol', precio: 1200, unidades: 12 },
            { id: 5, categoria: 'Compùtación', nom_producto: 'Azucar', precio: 2000, unidades: 10, desc_producto: 'descripción azucar' },
            { id: 6, categoria: 'Compùtación', nom_producto: 'Arroz', precio: 2500, unidades: 5, desc_producto: 'descripción arroz' },
            { id: 7, categoria: 'Consolas y Video juegos', nom_producto: 'Frijol', precio: 1200, unidades: 12 },
            { id: 8, categoria: 'Consolas y Video juegos', nom_producto: 'Azucar', precio: 2000, unidades: 10, desc_producto:
            'descripción azucar' },
            { id: 9, categoria: 'Consolas y Video juegos', nom_producto: 'Arroz', precio: 2500, unidades: 5, desc_producto:
            'descripción arroz' }
          ];
          localStorage.setItem("productos", JSON.stringify(PRODUCTOS)); //guardar array como string

    }

    public static categorias_productos(){
        const CATEGORIAS: CategoriaProducto[] = [
            {id: 1, categoria: 'Accesorios para Vehículos'},
            {id: 2, categoria: 'Animales y Mascotas'},
            {id: 3, categoria: 'Boletas para Espectáculos'},
            {id: 4, categoria: 'Cámaras y Accesorios'},
            {id: 5, categoria: 'Celulares y Teléfonos'},
            {id: 6, categoria: 'Coleccionables y Hobbies'},
            {id: 7, categoria: 'Computación'},
            {id: 8, categoria: 'Consolas y Videojuegos'},
            {id: 9, categoria: 'Deportes y Fitness'}
        ];
        localStorage.setItem("categorias", JSON.stringify(CATEGORIAS)); //guardar array como string
    }
}



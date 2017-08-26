export class Productos {
    constructor(
    public id: number,
    public categoria: string,
    public nom_producto: string,
    public precio: number,
    public unidades: number,
    public desc_producto?: string){
    }
}

export class CategoriaProducto{
    public id: number;
    public categoria: string;
}

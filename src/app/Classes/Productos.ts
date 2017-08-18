export class Productos_entrada {
    constructor(public id: number,
     public nom_producto: string,
     public precio: number,
     public unidades: number,
     public desc_producto?: string){
    }
}


export class Productos {
    public id: number;
    public nom_producto: string;
    public precio: number;
    public unidades: number;
    public desc_producto?: string;
}

export class Productos {
    constructor(public id: number,
     public nom_producto: string,
     public precio: number,
     public unidades: number,
     public desc_producto?: string){
    }
}

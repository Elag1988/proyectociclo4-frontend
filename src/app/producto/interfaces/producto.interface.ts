/* eslint-disable prettier/prettier */

export interface IProducto {
    
    readonly idProducto?: number,
    nombre: string,
    photoUrl: string,
    precioDeVenta: number,
    precioDeCompra: number,
    stock: number,
    descuento: number
}
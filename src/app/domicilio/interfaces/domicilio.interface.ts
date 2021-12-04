/* eslint-disable prettier/prettier */

export interface IDomicilio {
    
    idDomicilio?: number,
    cliente: string,
    direccion: string,
    fechaEntrega?: Date,
    estadoPedido: string
}
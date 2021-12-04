import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  API_URL:string = "http://localhost:3000" 

  constructor(private readonly htttpClient: HttpClient) { }


  getProducts():Observable<IProducto[]>{
    return this.htttpClient.get<IProducto[]>(`${this.API_URL}/inventario`);
  }

  getProductById(productId:number):Observable<IProducto>{
    return this.htttpClient.get<IProducto>(`${this.API_URL}/inventario/${productId}`);
  }

  createProduct(product:IProducto):Observable<IProducto>{
    return this.htttpClient.post<IProducto>(`${this.API_URL}/inventario/create`, product);
  }

  updateProduct(productId:number, product:IProducto):Observable<IProducto>{
    return this.htttpClient.put<IProducto>(`${this.API_URL}/inventario/update/${productId}`, product);
  }

  deleteProduct(productId:number):Observable<IProducto>{
    return this.htttpClient.delete<IProducto>(`${this.API_URL}/inventario/delete/${productId}`);
  }

}

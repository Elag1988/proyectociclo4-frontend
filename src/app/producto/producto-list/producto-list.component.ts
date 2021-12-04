import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/producto.interface';
import { ProductoService } from '../service/producto.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productList:IProducto[] = [];

  product: IProducto = {
    nombre: '',
    photoUrl: '',
    precioDeVenta: 0,
    precioDeCompra: 0,
    stock: 0,
    descuento: 0,
  }

  edit: boolean = false;

  constructor(
    private readonly productoService: ProductoService,
    private readonly router:Router,
    private readonly activateRoute: ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productoService.getProducts().subscribe(
      data => this.productList = data
    );
  }

  deleteProduct(productid: number) {
    this.productoService.deleteProduct(productid).subscribe (
      
      res =>{
        this.getProducts();
        console.log(res);
      },
      err => console.log(err)
    );
  }

  createProduct() {
    this.productoService.createProduct(this.product). subscribe (
      res => {
        console.log(res);
        this.getProducts();
        
      },
      err => console.log(err) 
    );
  }


}

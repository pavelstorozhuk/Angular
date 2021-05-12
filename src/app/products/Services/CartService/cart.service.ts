import { Injectable } from '@angular/core';
import {Product} from '../../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<Product> = [];
  constructor() { }

  // для методов используется первая буква в нижнем регистре
  addProduct(product: Product): void{
      this.products.push(product);
  }
}

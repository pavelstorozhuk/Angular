import { Injectable } from '@angular/core';
import {Product} from '../../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<Product> = [];
  constructor() { }

  AddProduct(product: Product): void{
      this.products.push(product);
  }
}

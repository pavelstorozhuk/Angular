import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {Category} from './category.enam';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product>{
    return [
      new Product('Iphone 12 PRO', 'mobile phone', Category.MobilePhones, 1200, true),
      new Product('Apple watch', 'watch', Category.Watches, 300, true),
      new Product('Acer nitro', 'laptop', Category.Laptops, 300, true),
    ];

  }
}

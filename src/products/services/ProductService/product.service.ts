import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model';
import {Category} from '../../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product>{
    return [
      new Product('Iphone 12 PRO', 'mobile phone', Category.MobilePhones, 1200, false),
      new Product('Apple watch', 'watch', Category.Watches, 300, true),
      new Product('Acer nitro', 'laptop', Category.Laptops, 300, true),
    ];

  }
}

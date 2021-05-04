import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Product } from '../../Models/product.model';
import { ProductService } from '../../Services/ProductService/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

  }

  onAddNewProduct(product: Product): void{
    this.products.push(product);
  }
  trackByProducts(index: number, product: Product): string {
    return product.name;
  }
}

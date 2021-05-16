import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/ProductService/product.service';
import { CartService } from '../../../cart/services/cart-service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

  }

  onAddNewProduct(product: Product): void{
    this.products.push(product);
  }

  onBuyClick(product: Product): void {

    if (product) {
      console.log(`product ${product.name} has been added to the Cart`);
      this.cartService.addProduct(product);
    }
  }

  trackByProducts(index: number, product: Product): string {
    return product.name;
  }
}

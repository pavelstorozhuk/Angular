import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart-list/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
  }

  onBuyClick(): void {
    if (this.product) {
      console.log(`product ${this.product.name} has been added to Cart`);
      this.cartService.AddProduct(this.product);
    }
  }
}

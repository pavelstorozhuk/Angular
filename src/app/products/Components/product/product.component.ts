import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/CartService/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;

  // желательно не использовать тут зависимость, а создавать уатпут для родительского компонента
  // компонент без зависимостей более простой, чем с зависимостями
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
  }

  onBuyClick(): void {
    if (this.product) {
      console.log(`product ${this.product.name} has been added to Cart`);
      this.cartService.addProduct(this.product);
    }
  }
}

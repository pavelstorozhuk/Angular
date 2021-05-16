import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsInformation } from 'src/cart/models/productsInformation';
import {CartService} from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  getWholePrice(): number{
    const productsInformation: Array<ProductsInformation> = this.cartService.getProductsInformation();
    let price = 0;
    productsInformation.forEach(item => price += (item.productPrice * item.productsCount));
    return price;
  }

  decreaseProductCount(productName: string): void {
    this.cartService.decreaseProductsCount(productName);
  }

  increaseProductCount(productName: string): void {
    this.cartService.increaseProductsCount(productName);
  }

  removeProducts(productName: string): void {
    this.cartService.removeProducts(productName);
  }


}

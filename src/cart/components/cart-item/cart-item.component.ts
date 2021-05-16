import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductsInformation } from '../../models/productsInformation';

/* tslint:disable:component-selector */
@Component({

  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() product: ProductsInformation | undefined;

  @Output()
  increaseProductCount: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  decreaseProductCount: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  removeProducts: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncreaseProductCountClick(): void{
    this.increaseProductCount.emit(this.product?.productName);

  }

  onDecreaseProductCountClick(): void{
    this.decreaseProductCount.emit(this.product?.productName);
  }

  onRemoveProductsClick(): void{
    this.removeProducts.emit(this.product?.productName);
  }
}

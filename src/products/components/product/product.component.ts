import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product.model';

/* tslint:disable:component-selector */
@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Output()
  buyProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() product: Product | undefined;
  constructor() {

  }

  ngOnInit(): void {
  }

  onBuyClick(): void {
    this.buyProduct.emit(this.product);
  }
}

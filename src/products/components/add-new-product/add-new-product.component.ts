import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../../models/category.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  @Output()
  addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  // Думаю, тут было бы удобно использовать не набор свойств компонента,
  // а создать одно свойство с типом модели и его свойства использовать на форме
  productName = '';
  description = '';
  price = 0;
  isAvailable = false;
  category: string = Category.Watches;
  constructor() { }

  ngOnInit(): void {
  }

  onAddNewProductClick(): void {
    if (this.isNewProductFilled()){
      const product = new Product(this.productName, this.description, this.category as Category, this.price, this.isAvailable);
      this.addProduct.emit(product);
      this.resetCreatedProduct();
    }
  }


  private resetCreatedProduct(): void {
    this.productName = '';
    this.price = 0;
    this.description = '';
  }

  private isNewProductFilled(): boolean {
   return this.productName !== '' && this.description !== '' && this.category !== '';
  }
}

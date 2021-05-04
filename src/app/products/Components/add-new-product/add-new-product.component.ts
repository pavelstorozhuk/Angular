import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../../Models/category.enam';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  @Output()
  addProduct: EventEmitter<Product> = new EventEmitter<Product>();
  productName = '';
  description = '';
  price = 0;
  category = '';
  isAvailable = false;
  constructor() { }

  ngOnInit(): void {
  }

  onAddNewProductClick(): void {
    const product = new Product(this.productName, this.description, this.category as Category, this.price, this.isAvailable);
    this.addProduct.emit(product);
  }
  onProductNameKeyUp($event: any): void{
    this.productName = $event.target.value;
  }

  onDescriptionKeyUp($event: any): void{
    this. description = $event.target.value;
  }


  onPriceKeyUp($event: any): void{
    this.price = $event.target.value;
  }

  onCategoryChange(value: any): void{
    this.category = value;
  }

  onIsAvaialbeChanged($event: any): void {
    this.isAvailable = $event.target.checked;
  }
}

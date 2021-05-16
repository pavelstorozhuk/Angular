import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewProductComponent} from './components/add-new-product/add-new-product.component';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductService} from './services/ProductService/product.service';
import {CartModule} from '../cart/cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddNewProductComponent, ProductComponent, ProductListComponent],
  providers: [ProductService],
  imports:
  [
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    CartModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

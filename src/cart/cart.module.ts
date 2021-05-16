import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from './components/cart/cart-list.component';
import {CartService} from './services/cart-service/cart.service';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule { }

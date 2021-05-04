import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProductComponent } from './products/Components/product/product.component';
import { ProductListComponent } from './products/Components/product-list/product-list.component';
import { CartListComponent } from './products/Components/cart/cart-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewProductComponent } from './products/Components/add-new-product/add-new-product.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

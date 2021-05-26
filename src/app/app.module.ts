import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CartModule } from '../cart/cart.module';
import {ProductsModule} from '../products/products.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CartModule,
    ProductsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Почему папки
// cart, orders, products, shared оказались за пределами папки app?

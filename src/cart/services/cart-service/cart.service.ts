import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { ProductsInformation } from '../../models/productsInformation';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<Product> = [];
  constructor() { }

  addProduct(product: Product): void {
    this.products.push(product);
    this.sortProducts();
  }

  getProductsInformation(): Array<ProductsInformation> {
    const productsInformationArray: Array<ProductsInformation> = [];

    for (const product of this.products) {
      const productName = product.name;
      const productPrice = product.price;
      if (!productsInformationArray.find(information => information.productName === productName)) {
        const array = this.products.filter(item => item.name === productName);
        const productsInformation = new ProductsInformation(productName, array.length, productPrice);
        productsInformationArray.push(productsInformation);
      }
    }

    return productsInformationArray;
  }

  decreaseProductsCount(productName: string): void {
    const deletedProductIndex = this.products.findIndex(item => item.name === productName);
    if (deletedProductIndex !== -1) {
      this.products.splice(deletedProductIndex, 1);
      this.sortProducts();
    }
  }

  increaseProductsCount(productName: string): void {
    const product: Product | undefined = this.products.find(item => item.name === productName);
    if (product) {
      this.products.push(product);
      this.sortProducts();
    }
  }

  removeProducts(productName: string): void {
    this.products = this.products.filter(item => item.name !== productName);
  }

  private sortProducts(): void{
    this.products.sort((product1, product2) => {
      if (product1.name < product2.name) { return -1; }
      if (product1.name > product2.name) { return 1; }
      return 0;
    });
  }
}

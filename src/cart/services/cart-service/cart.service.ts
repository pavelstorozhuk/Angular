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

  decreaseProductsCount(productName: string, count: number = -1): void {

    this.changeQuantity(productName, count);

  }

  increaseProductsCount(productName: string, count: number = 1): void {

    this.changeQuantity(productName, count);
  }

  removeProducts(productName: string): void {
    this.products = this.products.filter(item => item.name !== productName);
  }

  getWholePrice(): number {
    const productsInformation: Array<ProductsInformation> = this.getProductsInformation();
    let price = 0;
    productsInformation.forEach(item => price += (item.productPrice * item.productsCount));
    return price;
  }

  getTotalQuantity(): number {
    return this.products ? this.products.length : 0;
  }


  addProduct(product: Product): void {
    const productsArray = [...this.products, product];

    this.products = this.sortProducts(productsArray);
  }

  removeAllProducts(): void{
    this.products = [];
  }

  isEmptyCart(): boolean{
    return this.products.length === 0;
  }

  private changeQuantity(productName: string, count: number): void {
    if (count > 0) {
      const product: Product | undefined = this.products.find(item => item.name === productName);
      if (!product) {
        throw new Error('Product should not have been undefined');
      }

      for (let index = 0; index < count; index++) {
        this.addProduct(product);
      }

    }

    if (count < 0) {
      count = count * -1;
      for (let index = 0; index < count; index++) {
        this.removeProduct(productName);
      }
    }

    this.products = this.sortProducts(this.products);
  }

  private removeProduct(productName: string): void{
    const deletedProductIndex = this.products.findIndex(item => item.name === productName);
    if (deletedProductIndex !== -1) {
      this.products = [...this.products.slice(0, deletedProductIndex), ...this.products.slice(deletedProductIndex + 1)];
    }
  }

  private sortProducts(products: Array<Product>): Array<Product> {
    products.sort((product1, product2) => {
      if (product1.name < product2.name) { return -1; }
      if (product1.name > product2.name) { return 1; }
      return 0;
    });

    return products;
  }
}

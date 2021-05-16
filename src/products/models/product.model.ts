
import {Category} from './category.enum';
export class Product {
    constructor(
      public name: string,
      public description: string,
      public category: Category,
      public price: number,
      public isAvailable: boolean
    ) {}
  }

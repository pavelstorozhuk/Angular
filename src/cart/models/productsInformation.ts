export class ProductsInformation {
    constructor(public productName: string,
                public productsCount: number,
                public productPrice: number) {

    }

    getWholePrice(): number{
        return this.productsCount * this.productPrice;
    }
}


